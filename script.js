const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  // Desktop hover effect
  card.addEventListener('mousemove', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    card.style.transform =
      `perspective(1000px)
       rotateX(${(y - card.offsetHeight / 2) / 10}deg)
       rotateY(${-(x - card.offsetWidth / 2) / 10}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform =
      'perspective(1000px) rotateX(0) rotateY(0)';
  });

  // Mobile touch support
  card.addEventListener('touchstart', () => {
    card.style.transform =
      'perspective(1000px) rotateX(0) rotateY(0)';
  });

  card.addEventListener('touchend', () => {
    card.style.transform =
      'perspective(1000px) rotateX(0) rotateY(0)';
  });
});
