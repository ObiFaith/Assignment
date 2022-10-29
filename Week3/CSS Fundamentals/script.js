let navToggle = document.querySelector('.nav_toggle');
let nav = document.querySelector('.nav');

navToggle.addEventListener('click', ()=>{
    nav.classList.toggle('visible');
})