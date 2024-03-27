// Note: If you disable javascript in your browser, the header will not have an image

document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector('.site-header');
  var images = [
    '/img/games/header/blackmesa.webp',
    '/img/games/header/rdr2.webp',
    '/img/games/header/gta5.webp',
    '/img/games/header/portal2.webp',
    '/img/games/header/atdeadofnight.webp',
    '/img/games/header/wttg2.webp'
  ];
  
  var shownImages = JSON.parse(localStorage.getItem('shownImages')) || [];
  var availableImages = images.filter(function(image) {
      return !shownImages.includes(image);
  });
  if (availableImages.length === 0) {
      shownImages = [];
      availableImages = images.slice();
  }
  var randomIndex = Math.floor(Math.random() * availableImages.length);
  var randomImage = availableImages[randomIndex];

  header.style.backgroundImage = 'url(' + randomImage + ')';
  
  shownImages.push(randomImage);
  localStorage.setItem('shownImages', JSON.stringify(shownImages));
});