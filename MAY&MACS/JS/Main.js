// Toggle menu images
document.getElementById('toggle-menu-images-btn').addEventListener('click', function () {
    const images = document.getElementById('hero-images');
    if (images.style.display === 'none' || images.style.display === '') {
      images.style.display = 'flex';
    } else {
      images.style.display = 'none';
    }
});
  
// Toggle nav menu on small screens
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('main-menu');
    menu.classList.toggle('active');
});
