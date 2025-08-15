// script.js
const video = document.getElementById('introVideo');

window.addEventListener('scroll', () => {
    const videoBottom = document.getElementById('video-section').offsetHeight;
    if (window.scrollY > videoBottom - 100) {
        video.pause();
    } else {
        if (video.paused) video.play();
    }
});
