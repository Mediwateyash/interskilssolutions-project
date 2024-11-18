let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set interval for automatic slider
setInterval(showNextSlide, 5000);
