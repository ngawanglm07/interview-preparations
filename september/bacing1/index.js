const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.transform = 'translateX(0)';
    } else {
      image.style.transform = 'translateX(-100%)';
    }
  });
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

showImage(currentIndex);
