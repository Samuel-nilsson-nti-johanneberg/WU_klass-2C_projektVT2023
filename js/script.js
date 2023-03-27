const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('link_list_visible')
    burger.classList.toggle('burger_in_x_form')
}


burger.addEventListener('click', toggleMenu)




// Galleriswitch funktionen
// Väljer alla knappar som switchar mellan gallerierna och alla gallerier
const galleryButtons = document.querySelectorAll('.gallery-button');
const galleries = document.querySelectorAll('.gallery');

// Går igenom varje knapp och lägger till en click-eventlyssnare
galleryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Väljer det galleri som matchar knappens dataset-attribut
    const gallery = document.querySelector(`#${button.dataset.gallery}`);
    // Tar bort "active"-klassen från alla gallerier
    galleries.forEach(gallery => gallery.classList.remove('active'));
    // Lägger till "active"-klassen på det valda galleriet
    gallery.classList.add('active');
  });
});




// Här kommer koden till bildspelet på contact-sidan

var slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
var currentSlide = 0;

function nextSlide() {
  var slide = document.getElementsByClassName('slide')[currentSlide];
  slide.classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slide = document.getElementsByClassName('slide')[currentSlide];
  slide.classList.add('active');
}

function prevSlide() {
  var slide = document.getElementsByClassName('slide')[currentSlide];
  slide.classList.remove('active');
  currentSlide = (currentSlide + slides.length - 1) % slides.length;
  slide = document.getElementsByClassName('slide')[currentSlide];
  slide.classList.add('active');
}

var slideInterval = setInterval(nextSlide, 4000);
