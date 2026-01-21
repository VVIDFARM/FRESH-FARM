const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", ()=>{
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});
