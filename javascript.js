carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
let stop;


const startSlide = () =>{

    stop =  setInterval(function(){ 
        if(counter>= carouselImages.length - 1) return;
        carouselSlide.style.transition = "transform 0.9s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }, 5000);

};

startSlide();

 carouselcontainer.addEventListener('mouseover', ()=>{
    clearInterval(stop);
 });
 
 carouselcontainer.addEventListener('mouseleave', startSlide)

nextBtn.addEventListener('click',()=>{
    if(counter>= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.9s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
   
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.9s ease-in-out";
    counter-- ;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    
   
});

carouselSlide.addEventListener('transitionend', () =>{
    

    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        
    }   
    
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        
    }   
    
         

});



