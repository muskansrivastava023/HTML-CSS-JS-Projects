let songImage = document.querySelector("#song-image")
let playbtn = document.querySelector(".play")
let audioId = document.querySelector("#audio-id");
let audioClass = document.querySelector(".audio-class")
let songName = document.querySelector("#song-name");
let singerBand = document.querySelector("#singer-band")
let currentTimeDisplay = document.querySelector("#current-time");
let totalTimeDisplay = document.getElementById("total-time")
let play2imgC = document.querySelector(".play2");
let PrevBtn = document.querySelector(".prevBtn")
let NextBtn = document.querySelector(".nextBtn")
let progressBar = document.getElementById("progress-bar")

const songs = [
    {
        path: 'Blue-One-Love.mp3',
        songName: 'One Love',
        displayImage: 'https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=600',
        artist: 'Blue'
    },
    {
        path: 'One-Love(Shubh).mp3',
        songName: 'One Love',
        displayImage: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=600',
        artist: 'Shubh'
    },
    {
        path: 'Believer-Imagine-Dragons.mp3',
        songName: 'Believer',
        displayImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
        artist: 'Imagine Dragons'
    }
]


isSongPlaying = false;

songImage.addEventListener('click', () => {
    playbtn.click();
})
playbtn.addEventListener("click", () => {
    if (isSongPlaying) {
        pauseMusic();
    }
    else {
        playMusic();
    }
});

NextBtn.addEventListener("click", () => {
    if (currentSong >= songs.length - 1) {
        currentSong = 0;
    }
    else {
        currentSong++;
    }
    setMusic(currentSong);
    AlwaysPlayMusic();
});

PrevBtn.addEventListener("click", () => {
    if (currentSong <= 0) {
        currentSong = songs.length - 1;
    }
    else {
        currentSong--;
    }
    setMusic(currentSong);
    AlwaysPlayMusic();
});


progressBar.onchange = () => {
    audioClass.currentTime = progressBar.value;
}

setInterval(() => {
    progressBar.value = audioClass.currentTime
    currentTimeDisplay.innerHTML = formatTime(audioClass.currentTime)
    if (Math.floor(audioClass.currentTime) == Math.floor(progressBar.max)) {
        NextBtn.click();
    }
}, 500)


const playMusic = () => {
    audioId.play()
    isSongPlaying = true;
    play2imgC.src = "pauseButton.png"
    play2imgC.setAttribute("title", "pause")
};
const pauseMusic = () => {
    audioId.pause()
    isSongPlaying = false;
    play2imgC.src = "playButton.png";
    play2imgC.setAttribute("title", "play")
};


const setMusic = (i) => {
    progressBar.value = 0;
    let song = songs[i];
    currentSong = i;
    audioId.src = song.path;
    songName.innerHTML = song.songName;
    songImage.src = song.displayImage;
    singerBand.innerHTML = song.artist;

    setTimeout(() => {
        progressBar.max = audioClass.duration;
        totalTimeDisplay.innerHTML = formatTime(audioClass.duration)
    }, 300)
}
setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`
    }

    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}

const AlwaysPlayMusic = () => {
    audioId.play();
    isSongPlaying = true;
    play2imgC.src = "pauseButton.png"
    play2imgC.setAttribute("title", "pause")
}
