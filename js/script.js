///// random background color /////
let red , green , blue 
setInterval(() => {
    red = Math.floor(Math.random()*255)
    green = Math.floor(Math.random()*255)
    blue = Math.floor(Math.random()*255)
    document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')'
}, 3000);
///// popup click /////  
const open = document.querySelector('#open');
const pop = document.querySelector('#pop');
const close = document.querySelector('#close');

    open.addEventListener('click', function(){
        pop.classList.remove('hidden');
    });

    close.addEventListener('click', function(){
        pop.classList.add('hidden');
    });
///// copy text /////
    document.getElementById('copyButton').addEventListener('click', function(){
        let inputbox = document.getElementById('box');
        inputbox.select();
        document.execCommand('copy');
        this.innerText = "copied";
    });
