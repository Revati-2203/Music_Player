let fillbar = document.querySelector('.fill');
let audios= ['Kyon.mp3','',''];
let covers=['','',''];
let currentTime = document.querySelector(".time");

let audio = new Audio();
let currentSong= 0;
window.onload = playSong;

function playSong(){
    audio.src = audios[currentSong];
   audio.play();
}
function togglePlayPause()
{
    if(audio.paused){
        audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML='<i class= "fa fa-pause"></i>';
    playBtn.style.paddingLeft ="30px";
    } else{
        audio.pause();
        playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML='<i class= "fa fa-play"></i>';
        playBtn.style.paddingLeft ="33px";
    }
}
audio.addEventListener("timeupdate",function(){
    let position = audio.currentTime / audio.duration;
    fillbar.style.width = position*100 + "%";
});