let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".profile-card");
  const totalSlides = slides.length;
  const carouselInner = document.querySelector(".carousel-inner");

  // Ensure the index is within bounds
  if (index >= totalSlides) currentSlide = 0;
  else if (index < 0) currentSlide = totalSlides - 1;
  else currentSlide = index;

  // Calculate the transform value
  const offset = -currentSlide * 250; // Adjust width if needed
  carouselInner.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialize the carousel
showSlide(currentSlide);
