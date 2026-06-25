const cards = document.querySelectorAll('.card');

cards.forEach(card => {

card.addEventListener('mousemove',(e)=>{

const x = e.offsetX;
const y = e.offsetY;

card.style.transform =
`perspective(1000px)
rotateX(${(y-100)/10}deg)
rotateY(${-(x-100)/10}deg)`;

});

card.addEventListener('mouseleave',()=>{

card.style.transform =
'perspective(1000px) rotateX(0) rotateY(0)';

});

});