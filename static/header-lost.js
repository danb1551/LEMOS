document.addEventListener('DOMContentLoaded', () => {
  let lastScroll = 0;
  const header = document.getElementById('main-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('hide');
      return;
    }

    if (currentScroll > lastScroll) {
      header.classList.add('hide');
    } else {
      header.classList.remove('hide');
    }

    lastScroll = currentScroll;
  });
});