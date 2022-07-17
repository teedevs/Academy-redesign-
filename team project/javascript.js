const bigMover = document.querySelector('.bigMover');
const bigMoverImage = document.querySelectorAll('.bigMover img');
const boxView = document.querySelector('.boxView');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let number = 1;
const width = bigMoverImage[0].clientWidth;
bigMover.style.transform = 'translateX(' + (-width * number) + 'px)';
bigMover.style.transition = "transform 0.9s ease-in-out";
let stop;


nextBtn.addEventListener('click',()=>{
    if(number>= bigMoverImage.length - 1) return;
    bigMover.style.transition = "transform 0.9s ease-in-out";
    number++;
    bigMover.style.transform = 'translateX(' + (-width * number) + 'px)';
    
   
});

prevBtn.addEventListener('click',()=>{
    if(number <= 0) return;
    bigMover.style.transition = "transform 0.9s ease-in-out";
    number-- ;
    bigMover.style.transform = 'translateX(' + (-width * number) + 'px)';

    
   
});


const startSlide = () =>{

    stop =  setInterval( () =>{ 
        if(number>= bigMoverImage.length - 1) return;
        bigMover.style.transition = "transform 0.9s ease-in-out";
        number++;
        bigMover.style.transform = 'translateX(' + (-width * number) + 'px)';
    }, 3000);

};

startSlide();

 boxView.addEventListener('mouseover', ()=>{
    clearInterval(stop);
 });
 
 boxView.addEventListener('mouseleave', startSlide)



bigMover.addEventListener('transitionend', () =>{
    

    if (bigMoverImage[number].id === 'repeat1') {
        bigMover.style.transition = "none";
        number = bigMoverImage.length -2;
        bigMover.style.transform = 'translateX(' + (-width * number) + 'px)';
        
    }   
    
    if (bigMoverImage[number].id === 'repeat2') {
        bigMover.style.transition = "none";
        number = bigMoverImage.length - number;
        bigMover.style.transform = 'translateX(' + (-width * number) + 'px)';
        
    }   
    
         

});



