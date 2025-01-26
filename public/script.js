const userVideo = document.getElementById('user-video');
const startButton = document.getElementById('start-button');


const state = {media : null}
const socket = io();

startButton.addEventListener('click' , async () => {
    const mediaRecorder = new MediaRecorder(state.media ,
        {audioBitsPerSecond : 128000 , videoBitsPerSecond : 2500000 , frameRate : 25});

    mediaRecorder.ondataavailable = (event) => {
        socket.emit('stream' , event.data);
    }

    mediaRecorder.start(25);

})

window.addEventListener('load' , async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true , audio: true });
    state.media = mediaStream;
    userVideo.srcObject = mediaStream;
})



