//imports
import ColorThief from './color-thief-2.4.0/dist/color-thief.mjs';
import { boxS } from './colorPicker.js';
//progress bar
let progress =document.getElementById("progress");
let song =document.getElementById("song");
let ctrlIcon =document.getElementById("ctrlIcon");
let ctrl=document.querySelector("#ctrlIcon i");
song.onloadedmetadata = ()=>{
  progress.max = song.duration;
  progress.value = song.currentTime;
};
song.onended = ()=> {
  if(index!=track_list.length-1){
    index=index+1;
    loadTrack(index);
  }
  else{
    ctrl.classList.remove("fa-pause");
    ctrl.classList.add("fa-play");
  }
};
let count=0;
let playPause = function playPause(){
    if(count==0){
      song.load();
      song.play()
      ctrl.classList.add("fa-pause");
      ctrl.classList.remove("fa-play");
      count=count+1;
      return count;
    }
    else{
      song.pause()
      ctrl.classList.remove("fa-pause");
      ctrl.classList.add("fa-play");
      count=count-1;
      return count;
    }
  };
ctrlIcon.addEventListener('click',playPause);

if(count==0){
  setInterval(()=>{
    progress.value = song.currentTime;
  },500)
};

progress.onchange =()=>{
  song.play();
  song.currentTime = progress.value;
  ctrl.classList.add("fa-pause");
  ctrl.classList.remove("fa-play");
};
//track_list
let prevBtn=document.querySelector(".back");
let nextBtn=document.querySelector(".for");
let trackName=document.querySelector("#track-name");
let trackArtist=document.querySelector("#artist-name");
let copyRight=document.querySelector("#copy");
let index=0;
let track_list = [
  {
    name: "Bussin'",
    artist: "TWISTED",
    image: "/musicPlayer/tracks-images/bussin.jpg",
    path: "/musicPlayer/tracks/BUSSIN.mp3",
    copy: "Song: TWISTED - BUSSIN' [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://ncs.io/BUSSIN Watch: http://ncs.lnk.to/BUSSINAT/youtube",
  },
  {
    name: "BassFace",
    artist: "Jonth",
    image: "/musicPlayer/tracks-images/Bass-Face.jpg",
    path: "/musicPlayer/tracks/BassFace.mp3",
    copy: "Song: Jonth - Bass Face [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: Watch:",
  },
  {
    name: "UFO",
    artist: "Rameses B",
    image:"/musicPlayer/tracks-images/ufo.jpg",
    path: "/musicPlayer/tracks/UFO.mp3",
    copy: "Song: Rameses B - UFO [NCS Release] Music provided by NoCopyrightSounds Free Download/Stream: http://ncs.io/UFO Watch: http://ncs.lnk.to/UFOAT/youtube",
  },
];
function updateBoxShadowColor(imageUrl) {
  const image = document.querySelector(".song-img");
  image.src = imageUrl; 

  image.onload = () => {
    const colorThief = new ColorThief();
    const dominantColor = colorThief.getColor(image);
    boxS(dominantColor);
  };
}


function loadTrack(index){
  resetValues();
  song.src=track_list[index].path;
  updateBoxShadowColor(track_list[index].image);
  trackName.innerHTML=track_list[index].name;
  trackArtist.innerHTML=track_list[index].artist;
  copyRight.innerHTML='© '+track_list[index].copy;
  song.load();
  count=0;
  playPause();
};
function resetValues(){
  progress.value=0;
  song.currentTime=0;
};
function next(){
  if(index>=0 & index<=track_list.length-2){
    loadTrack(index=index+1);
  }
};
function prev(){
  if(index>=1){
    loadTrack(index=index-1);
  }
};
prevBtn.addEventListener('click',()=>{
  prev();
});
nextBtn.addEventListener('click',()=>{
  next();
});

//menu bar
{
let menu=document.querySelector(".menu button");
let list=document.querySelector(".list")
let content=document.querySelector(".list ul");
let count=0;
menu.addEventListener('click',()=>{
  if(count===0){
    list.classList.add("option");
    content.style.display='inline-block';
    menu.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
    count=count+1;
  }
  else{
    list.classList.remove("option");
    content.style.display='none';
    menu.innerHTML=`<i class="fa-solid fa-bars"></i>`;
    count=count-1;
  }
})
}
//option setting in menu

let content=document.querySelector(".list ul");
for(let i=0;i<track_list.length;i++){
  content.innerHTML+=`<a class="a${i+1}" style='cursor:pointer;'><li><i class="fa-solid fa-music" style='font-size:1rem;'></i>${' '}${track_list[i].name}</li></a>`;
};
//anchor tag to change to desired song
for(let i=1;i<=track_list.length;i++){
 let anchor=document.querySelector(`.a${i}`);
 anchor.addEventListener('click',()=>{
  index=i-1;
  loadTrack(index)
 });
};

