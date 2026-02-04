document.addEventListener('DOMContentLoaded', () => {
  const figures = Array.from(document.querySelectorAll('.photo-grid figure'));
  const lightbox = document.querySelector('.lightbox');
  if (!figures.length || !lightbox) return;

  const imgEl = lightbox.querySelector('.lightbox-image');
  const captionEl = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;

  function openLightbox(index) {
    const figure = figures[index];
    if (!figure) return;
    const img = figure.querySelector('img');
    const caption = figure.querySelector('figcaption');

    imgEl.src = img.src;
    imgEl.alt = img.alt || '';
    captionEl.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    currentIndex = index;
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  function showNext(delta) {
    const nextIndex = (currentIndex + delta + figures.length) % figures.length;
    openLightbox(nextIndex);
  }

  figures.forEach((figure, index) => {
    const link = figure.querySelector('a');
    if (!link) return;
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(index);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => showNext(-1));
  nextBtn.addEventListener('click', () => showNext(1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showNext(-1);
    if (e.key === 'ArrowRight') showNext(1);
  });
});

