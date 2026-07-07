
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card, .timeline div');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(16px)';
    setTimeout(() => {
      card.style.transition = 'opacity .45s ease, transform .45s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 90);
  });
});
