
    let openOn = document.querySelector('.open')
    let box = document.querySelector('.size_box');
    let close = document.querySelector('.my_close__btn');
    let overlay = document.querySelector('.overlay_size');


    openOn.addEventListener("click", ()=>{
            overlay.style.display="block"
            box.style.display = "block";
    });
    close.addEventListener('click',()=>{
        overlay.style.display="none"
        box.style.display = "none";
    })
