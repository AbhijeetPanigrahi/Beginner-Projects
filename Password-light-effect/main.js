let beam=document.querySelector(".beam");
document.addEventListener("mousemove", (event)=> {
    let mouseY=event.clientY;
    let rotationRange = 8;
    let rotationAngle = 
    (mouseY/window.innerHeight) * rotationRange - rotationRange/2
    beam.style.transform = `translate(0%, -50%) rotate(${-rotationAngle
    }deg)`
});

function toggle(btn){
    let password = document.getElementById("password");
    if(btn.innerText == "visibility_off"){
        password.setAttribute("type", "text");
        password.style.color = "black "
        btn.innerText= "visibility"
        stopSound();
    }
    else{
        password.setAttribute("type", "password");
        password.style.color = "white"
        btn.innerText= "visibility_off"
        playSound();
    }
    beam.classList.toggle("on");
}
//-------------------------------------------------------------------------------

function playSound() {
    if (!isSoundPlaying) {
        torchSound.play();
        isSoundPlaying = true;
    }
}

function stopSound() {
    torchSound.pause();
    torchSound.currentTime = 0;
    isSoundPlaying = false;
}   