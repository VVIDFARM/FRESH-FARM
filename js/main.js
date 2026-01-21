let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach(s => s.style.display = "none");
  index++;
  if (index > slides.length) index = 1;
  slides[index - 1].style.display = "block";
}

if (slides.length > 0) {
  showSlide();
  setInterval(showSlide, 4000);
}
