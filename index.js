fucntion openStream(){
    const config = {audio: false, video: true};
    navigator.mediaDevices.getUserMedia(config);
}

openStream{}
.then(stream => console.log(stream));