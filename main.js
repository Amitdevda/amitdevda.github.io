document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        const scrollUpBtn = document.querySelector('.scroll-up-btn');

        if (this.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        if (this.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });
});


const scrollUpBtn = document.querySelector('.scroll-up-btn');

scrollUpBtn.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = 'auto';
});


const links = document.querySelectorAll('.navbar .menu li a');

links.forEach(link => {
    link.addEventListener('click', function () {
        document.documentElement.style.scrollBehavior = 'smooth';
    });
});

var typed = new Typed(".typing", {
    strings: ["Full Stack Web Developer", "Backend Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Full Stack Web Developer", "Backend Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

let openResume = document.getElementById("resume-button-1");
    
    openResume.addEventListener("click", () => {
    window.open('https://drive.google.com/file/d/1wR9F1f2Qx3f47iZOKJQImvXUoDiYcqv_/view?usp=share_link', '_blank'); 
   })
let openResume2 = document.getElementById("resume-button-2");
    
   setTimeout(() => {
       openResume2.addEventListener("click", () => {
       window.open('https://drive.google.com/file/d/1wR9F1f2Qx3f47iZOKJQImvXUoDiYcqv_/view?usp=share_link', '_blank'); 
      })
   }, 2000);



// const carousel = document.querySelector('.carousel');
// const slides = carousel.querySelectorAll('.slide');
// let currentSlide = 0;

// slides[currentSlide].classList.add('active');

// const prevBtn = document.querySelector('#prev');
// const nextBtn = document.querySelector('#next');

// prevBtn.addEventListener('click', function () {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     slides[currentSlide].classList.add('active');
// });

// nextBtn.addEventListener('click', function () {
//     slides[currentSlide].classList.remove('active');
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active');
// });



