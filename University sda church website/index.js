let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let autoSlideInterval;
let isAutoSliding = true;

// Function to update slide position
function updateSlidePosition() {
  const slidesWrapper = document.querySelector(".slides");
  if (!slidesWrapper) {
    console.error("Slides wrapper not found!");
    return;
  }
  const transformValue = `translateX(-${currentSlide * 100}%)`;
  console.log("Updating transform to:", transformValue);
  slidesWrapper.style.transform = transformValue;
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  console.log("Next slide:", currentSlide);
  updateSlidePosition();
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  console.log("Previous slide:", currentSlide);
  updateSlidePosition();
}

// Auto-slide every 5 seconds
function startAutoSlide() {
  console.log("Starting auto-slide...");
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  console.log("Stopping auto-slide...");
  clearInterval(autoSlideInterval);
}

// Toggle auto-slide on pause/play button click
function toggleAutoSlide() {
  const pausePlayButton = document.querySelector(".pause-play");
  if (isAutoSliding) {
    console.log("Pausing auto-slide...");
    stopAutoSlide();
    pausePlayButton.textContent = "Play";
  } else {
    console.log("Resuming auto-slide...");
    startAutoSlide();
    pausePlayButton.textContent = "Pause";
  }
  isAutoSliding = !isAutoSliding;
}

// Start auto-slide on page load
window.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded. Starting auto-slide...");
  startAutoSlide();
});

// index.js
window.addEventListener("DOMContentLoaded", () => {
  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll(".nav-links a");

  menuItems.forEach((item) => {
    if (item.href.includes(currentLocation)) {
      item.classList.add("active");
    }
  });
});

// Slider script
//form javascript
function toggleText() {
  var moreText = document.getElementById("moreText");
  var btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline"; // Show more content
    btnText.innerHTML = "Read Less"; // Change button text
  } else {
    moreText.style.display = "none"; // Hide additional content
    btnText.innerHTML = "Read More"; // Change button text back
  }
}

//hamburgr menu icon javascript
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
