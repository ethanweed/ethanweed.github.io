document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dotsContainer = document.querySelector('.carousel-dots');

  let current = 0;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('carousel-dot');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function goTo(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots[current].classList.remove('active');
    current = index;
    dots[current].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    goTo(current === slides.length - 1 ? 0 : current + 1);
  });

  prevBtn.addEventListener('click', () => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  });
});
