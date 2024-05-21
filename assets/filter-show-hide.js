let hide = document.querySelector('.my_filter__hide');
let show = document.querySelector('.my_filter__show');
let AllFilters = document.getElementsByClassName('.js-filter');
// let hide = document.querySelector('.my_filter__hide');

hide.addEventListener('click',()=>{
    AllFilters.style.display = "block";
    console.log("Sds");
})

show.addEventListener('click',()=>{
    AllFilters.style.display = "none";
    console.log("Fsf");
})