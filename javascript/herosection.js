let currentHeroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slide");
const heroDots = document.querySelectorAll(".hero-dot");
const heroExploreButton = document.querySelector(".hero-explore-btn");
const autoSlideInterval = 10000; // 10 seconds
let heroAutoSlideTimer;

// URLs for each slide
const exploreLinks = [
  "course.html", // Slide 1
  "aboutus.html", // Slide 2
  "services.html", // Slide 3
  "contact.html", // Slide 4
];

// Function to show the hero slide
function showHeroSlide(index) {
  if (index >= heroSlides.length) currentHeroIndex = 0;
  else if (index < 0) currentHeroIndex = heroSlides.length - 1;
  else currentHeroIndex = index;

  heroSlides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentHeroIndex * 100}%)`;
    heroDots[i].classList.remove("active-hero");
  });

  // Update active dot
  heroDots[currentHeroIndex].classList.add("active-hero");

  // Update the Explore button's link
  heroExploreButton.setAttribute("href", exploreLinks[currentHeroIndex]);
}

// Function to change the hero slide
function changeHeroSlide(direction) {
  showHeroSlide(currentHeroIndex + direction);
  resetHeroAutoSlide();
}

// Function to navigate to a specific hero slide
function setHeroSlide(index) {
  showHeroSlide(index - 1);
  resetHeroAutoSlide();
}

// Start auto-slide
function startHeroAutoSlide() {
  heroAutoSlideTimer = setInterval(() => {
    changeHeroSlide(1);
  }, autoSlideInterval);
}

// Reset auto-slide on user interaction
function resetHeroAutoSlide() {
  clearInterval(heroAutoSlideTimer);
  startHeroAutoSlide();
}

// Initialize the hero slider
document.addEventListener("DOMContentLoaded", () => {
  showHeroSlide(0);
  startHeroAutoSlide();
});
