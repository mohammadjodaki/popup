document.getElementById('copyButton').addEventListener('click' , function(){
    let inputbox=document.getElementById('box')
    inputbox.select()
    document.execCommand('copy')

    let copyButton=document.getElementById('copyButton')
    copyButton.innerText = "copied";
})

    const open = document.querySelector('#open');
    const pop = document.querySelector('#pop');
    const close = document.querySelector('#close');

    open.addEventListener('click', function(){
        pop.classList.remove('hidden');
    });

    close.addEventListener('click', function(){
        pop.classList.add('hidden');
    });