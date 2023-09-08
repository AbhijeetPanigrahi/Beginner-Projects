const summervideo= document.getElementById('summervideo');
const rainyvideo= document.getElementById('rainyvideo');
const wintervideo= document.getElementById('wintervideo');
const windyvideo= document.getElementById('windyvideo');
    document.querySelector('#rainy').style.display = 'none'
	document.querySelector('#winter').style.display = 'none'
    document.querySelector('#windy').style.display = 'none'
    document.querySelector('#summer').style.display = 'none'
    document.querySelector('#summervideo').style.display = 'none'
    document.querySelector('#rainyvideo').style.display = 'none'
    document.querySelector('#wintervideo').style.display = 'none'
    document.querySelector('#windyvideo').style.display = 'none'
  
function hide(){
    document.querySelector('#rainy').style.display = 'none'
	document.querySelector('#winter').style.display = 'none'
    document.querySelector('#windy').style.display = 'none'
    document.querySelector('#summer').style.display = 'none'
}
function hiide(){
    summervideo.style.display = 'none';
    rainyvideo.style.display = 'none';
    wintervideo.style.display = 'none';
    windyvideo.style.display = 'none';
}

document.querySelector('#summerNext').addEventListener('click', hide1)

function hide1(){
    
	hide();
    document.querySelector('#summer').style.display = 'block'
    document.querySelector('#container').style.display = 'none'
    hiide();
    summervideo.style.display = 'block';
    summervideo.play();
    
}

document.querySelector('#rainyNext').addEventListener('click', hide2)

function hide2(){
	
    hide();
    document.querySelector('#rainy').style.display = 'block'
    document.querySelector('#container').style.display = 'none'
    hiide();
    rainyvideo.style.display = 'block';
    rainyvideo.play();
}

document.querySelector('#winterNext').addEventListener('click', hide3)

function hide3(){
	hide();
    document.querySelector('#winter').style.display = 'block'
    document.querySelector('#container').style.display = 'none'
    hiide();
    wintervideo.style.display = 'block';
    wintervideo.play();
}

document.querySelector('#windyNext').addEventListener('click', hide4)

function hide4(){
	hide();
    document.querySelector('#windy').style.display = 'block'
    document.querySelector('#container').style.display = 'none'
    hiide();
    windyvideo.style.display = 'block';
    windyvideo.play();
}


