let img = document.querySelector('.boxView img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let pag1 = document.getElementById("pag1");
let pag2 = document.getElementById("pag2");
let pag3 = document.getElementById("pag3");

btn1.addEventListener('click', () => {
    pag1.style.display = "block";
    pag2.style.display = "none";
    pag3.style.display = "none";
    img.src = 'img/altumcode-dMUt0X3f59Q-unsplash.jpg';
    

});
btn2.addEventListener('click', () => {
    img.src = 'img/fran-innocenti-nOwkd4YvdUg-unsplash.jpg'
    pag2.style.display = "block";
    pag1.style.display = "none";
    pag3.style.display = "none";
    
});
btn3.addEventListener('click', () => {
    img.src = 'img/mars-sector-6-IgUR1iX0mqM-unsplash.jpg'
    pag3.style.display = "block";
    pag1.style.display = "none";
    pag2.style.display = "none";
   
});