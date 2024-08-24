/**@type {HTMLCanvasElement} */ // digunakan untuk membantu dalam penulisan syntax js yang berasal dari html syntax
const canvas        = document.getElementById("character");
const ctx           = canvas.getContext("2d");
CANVAS_WIDTH        = canvas.width    = 900;
CANVAS_HEIGHT       = canvas.height   = 200;
const numberOfCharacter = 1; // jumlah enemy yang diinginkan 
const characterArr      = [];

const characterImage    = new Image();
characterImage.src      = 'assets/zombie.png'; // deafalt file directory Game/Jonny....dst

let gameFrame       = 8;

class Character{
    constructor(){
        window.addEventListener('scroll', ()=>{
            // let value = (value - 0.9) = window.scrollY;
            // document.getElementById('about').style.opacity =  0.1;
            this.speed = window.scrollY / 70;
            // console.log(window.scrollY);
            if(this.speed <= 10){
                this.speed++;   
            };
        });


        this.speed = 0.3;
        this.spriteWidth    = 9610 / 8; // ukuran width dari img dibagi dengan jumlah frame gambar
        this.spriteHeight   = 900;
        this.width  = this.spriteWidth / 10; //luas img enemy dibagi dengan rasio yang diinginkan.
        this.height = this.spriteHeight /5;
        this.x  = Math.random() * (CANVAS_WIDTH - this.width);
        this.y  = (CANVAS_HEIGHT - this.height);
        this.frame  = 8;
        this.flapSpeed = Math.floor(Math.random() * 0.5  + 1); 


    };
    update(){
        this.x -= this.speed;
        // this.y += Math.random() * 3 - 1.5;
        if (this.x + this.width < 0) this.x = canvas.width;
        // oprator ternary untuk melooping frame
        if (gameFrame % this.flapSpeed === 0){
            this.frame > 6 ? this.frame = 0 : this.frame++;
        }
    };
    draw(){
        ctx.drawImage(characterImage, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }

};
// const enemy1    = new Character();
for (i = 0; i < numberOfCharacter; i++){
    characterArr.push(new Character());
}
function animated(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update();
    // enemy1.draw();
    characterArr.forEach(character => {
        character.draw();
        character.update();
    });
    requestAnimationFrame(animated);

};
gameFrame++;
animated();
