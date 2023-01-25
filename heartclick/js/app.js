// UI 
const times = document.getElementById('times');
const loveme = document.querySelector('.loveme');

let timesclicked = 0;

// db click
let clicktiems = 0;

loveme.addEventListener('click',(e)=>{
    // console.log('hey');

    if(clicktiems === 0){
        clicktiems = new Date().getTime();
        // console.log(clicktiems);
    }else{
        if(new Date().getTime() - clicktiems < 800){
            
            // console.log('i am dblclick');

            createheart(e);
            clicktiems = 0;

        }else{

            clicktiems = new Date().getTime();
        }
    }

});

const createheart = (e)=>{
    
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    // console.log(heart);

    const cx = e.clientX;
    const cy = e.clientY;

    const offsettop = e.target.offsetTop;
    const offsetleft = e.target.offsetLeft;

    const xinside = cx - offsetleft;
    const yinside = cy - offsettop;

    heart.style.top = `${yinside}px`;
    heart.style.left = `${xinside}px`;

    loveme.appendChild(heart);

    //timesclicked += 1;
    // timesclicked++;
    // times.textContent = timesclicked;

    setTimeout(()=>heart.remove(),1000);

    times.textContent = ++timesclicked;
};