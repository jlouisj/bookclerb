document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.nav');

  console.log(nav);

  function toggleTransparency() {
    if (window.scrollY > 35) {
      nav.classList.add('transparent');
    } else {
      nav.classList.remove('transparent');
    }
  }
  window.addEventListener('scroll', toggleTransparency);
});
