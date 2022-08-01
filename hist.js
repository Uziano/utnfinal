// Reproductor de Video
let vid = document.querySelector('video')
let playBtn = document.getElementById('play')
let pauseBtn = document.getElementById('pause')

playBtn.addEventListener('click', () => {
    vid.play()
})
pauseBtn.addEventListener('click', () => {
    vid.pause()
})
