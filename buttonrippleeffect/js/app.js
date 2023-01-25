// UI 
const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);
buttons.forEach(button=>{
    // console.log(buttons);

    button.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log('i am working');

        const cx = e.clientX;
        // console.log(cx);
        const cy = e.clientY;
        // console.log(cy);
    
        const btntop = e.target.offsetTop;
        // console.log(btntop);
        const btnleft = e.target.offsetLeft;
        // console.log(btnleft);

        const xinside = cx-btnleft;
        const yinside = cy-btntop;
        // console.log(xinside,yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yinside + "px";
        circle.style.left = xinside + "px";
        // console.log(circle);

        // console.log(e.target);
        e.target.appendChild(circle);

    })
});