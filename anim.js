/* Animate on scroll */

AOS.init({
  duration: 800,
  easing: 'ease',
  once: false,
  mirror: true,
});



/* Anime home page */

let tl = gsap.timeline();


tl.from(".img-text", {
  duration: 7,
  y: -80,
  autoAlpha: 0,
  ease: Power4.out,
  stagger: 2.5
}).from(".text-content h1", {
    duration: 1,
    x: -100,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5,
}).from(".text-content p", {
  duration: 1,
  x: -150,
  autoAlpha: 0,
  ease: "elastic.out(1, 1)",
  stagger: {
    each: 0.75,
    amount: 0.5
  }
}, "+=0.50");


/* Animation scrool */

var smoothScroll = {

    move : function (old, des, actual) {
      easeInOutQuart = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
      actual += 1;
      ease = easeInOutQuart(actual / 300);
      delta = des - old;
      delta *= ease;
      delta += old;
      window.scrollTo(0, delta);
      if (actual < 300) {
        window.requestAnimationFrame(function () {
          smoothScroll.move(old, des, actual);
        });
      }
    },
  
    linkInit : function (e) {
      e.preventDefault();
      link = e.target.getAttribute("href").substr(1);
      block = document.getElementById(link).offsetTop;
      client = document.documentElement.scrollTop;
  
      smoothScroll.move(client, block, 0);
    },
  
    init : function () {
      links = document.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        link = links[i].getAttribute("href");
        if (link.search("#") == 0 & link.substr(1) != "") {
          links[i].onclick = smoothScroll.linkInit;
        }
      }
    }
};
  
window.onload = smoothScroll.init;



// CurrentYear

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;



// ACTIVE SCROLL

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.add('active');
      });
    } else {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.remove('active');
      });
    }
  });
});



// NAVBAR SHOW & HIDE

/*if (window.matchMedia('(min-width: 1041px)').matches) {
  var scroll1 = window.pageYOffset;
window.onscroll = function(){
    var scroll2 = window.pageYOffset;

    if(scroll1 > scroll2) {
      document.querySelector('nav').style.position = "fixed";
      document.querySelector('nav').style.top = "0";
    }else{
      document.querySelector('nav').style.position = "relative";
      document.querySelector('nav').style.top = "-100px";
    }
    scroll1 = scroll2;
}
}*/



// ImageSlider banner
var slider = document.getElementById("slider");
var images = slider.getElementsByClassName("imgSlider");
var current = 0;

function next() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

setInterval(next, 5000);



// HideNavbar
const navLink = document.querySelectorAll('.nav-link');
const checkbox = document.querySelector('input[type=checkbox]');

navLink.forEach(link => {
    link.addEventListener('click', function() {
        checkbox.checked = false;
    });
});


// Preloader Settings
window.onload = function() {
  setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
  }, 2000);
};