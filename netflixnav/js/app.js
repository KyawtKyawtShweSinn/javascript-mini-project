//UI
const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const navs = document.querySelectorAll('.nav');

openbtn.addEventListener('click',()=>{
    console.log('open');
    navs.forEach(nav=>nav.classList.add('visible'));
});


closebtn.addEventListener('click',()=>{
    navs.forEach((nav)=>{
        nav.classList.remove('visible');
    });
});