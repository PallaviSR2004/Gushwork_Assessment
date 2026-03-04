// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.onclick=e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  }
});
//changes the resume download button color when click on it
const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", function () {
  downloadBtn.classList.add("clicked");

  // remove color after 2 seconds
  setTimeout(() => {
    downloadBtn.classList.remove("clicked");
  }, 2000);
});

//journey
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


// Lightbox
function openLightbox(img){
  document.getElementById("lightbox").style.display="flex";
  document.getElementById("lightbox-img").src=img.src;
}
function closeLightbox(){
  document.getElementById("lightbox").style.display="none";
}

// Scroll Animation
const obs=new IntersectionObserver(e=>{
  e.forEach(x=>x.isIntersecting && x.target.classList.add("show"));
});
document.querySelectorAll(".fade").forEach(el=>obs.observe(el));

// Dark Mode
function toggleMode(){
  const body = document.body;
  const btn = document.getElementById("mode-toggle"); // FIXED ID

  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
    btn.textContent = "☀";
  } else {
    btn.textContent = "🌙";
  }
}
// Navbar show on scroll down, hide on scroll up
let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling DOWN → show navbar
    header.classList.remove("hide");
  } else {
    // Scrolling UP → hide navbar
    header.classList.add("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});