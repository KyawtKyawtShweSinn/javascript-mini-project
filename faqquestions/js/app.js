const togglebtns = document.querySelectorAll('.faq-toggle');
//console.log(togglebtns);

togglebtns.forEach(togglebtn =>{
    togglebtn.addEventListener('click',()=> {
        togglebtn.parentNode.classList.toggle('active');
    })
})
