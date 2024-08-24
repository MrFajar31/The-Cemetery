const home      = document.getElementById('home');
const music     = document.getElementById('music');
const musicBtn  = document.getElementById('musicBtn');
const audio     = new Audio('../assets/audios/graveyard.mp3');
let isPlaying   = false;
let text        = document.getElementById('wellcome');
let background  = document.getElementById('hero-background');
let treeLeft    = document.getElementById('hero-tree-left');
let treeRight   = document.getElementById('hero-tree-right');
let gateLeft    = document.getElementById('hero-gate-left');
let gateRight   = document.getElementById('hero-gate-right');
let navbar      = document.querySelector('nav');
let spider      = document.getElementById('spiderHanging');

const galleryBtn    = document.getElementById('galleryBtn');
const gallery       = document.getElementById('gallery');
const myProfileBtn  = document.getElementById('profile');
const myProfile     = document.getElementById('myProfile');

music.addEventListener('click', ()=> {
    isPlaying ? audio.pause() : audio.play();
    console.log('anjay');
    document.getElementById('play').classList.toggle('hide');
    document.getElementById('pause').classList.toggle('show');

});
audio.onplaying = function() {
  isPlaying = true;
  audio.loop = true;
};
audio.onpause = function() {
  isPlaying = false;
  audio.loop = true;
};

window.addEventListener('scroll', () =>{
    let valueY = window.scrollY;
    text.style.marginTop    = valueY * 0.8 + 'px';
    gateLeft.style.left     = valueY * -0.4 + 'px';
    gateRight.style.right   = valueY * -  0.4 + 'px';
    treeLeft.style.left     = valueY * -1 + 'px';
    treeRight.style.right   = valueY * -1 + 'px';
    // spider.style.right      = valueY  + 'px';

});

const logo = document.getElementById('logo');


galleryBtn.addEventListener('click', ()=> {
  gallery.classList.toggle('showGallery');
  // myProfile.classList.remove('showMyProfile');
  navbar.classList.toggle('navBlur');
});
myProfileBtn.addEventListener('click', ()=> {
  myProfile.classList.toggle('showMyProfile');
  gallery.classList.toggle('followGallery');
  document.getElementById('choose').classList.toggle('hide');
  // myProfile.classList.remove('showMyProfile');
});
logo.addEventListener('click', ()=> {
  document.getElementById('secondBar').classList.toggle('showMobileNav'); 
})
document.getElementById('secondBar-GalleryBtn').addEventListener('click', ()=>{
  myProfile.classList.remove('showMyProfile');
  gallery.classList.toggle('followGallery');
})