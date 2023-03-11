//swiper
const swiper = new Swiper(".swiper", {
    direction: "horizontal",
  
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      700: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        allowSlidePrev: true,
        allowSlideNext: true,
      },
    },
  });
function openLink(evt, animName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      if (tablinks[i] != evt.currentTarget) {
        tablinks[i].classList.remove("active");
      }
    }
    document.getElementById(animName).style.display = "flex";
    evt.currentTarget.classList.add("active");
  }
const burger = document.getElementById("burger");
  const links = document.querySelector(".links");
  const anchors = links.querySelectorAll("a");
  
  burger.addEventListener("click", function () {
    this.classList.toggle("rotate");
    links.classList.toggle("open");
  });
  
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      burger.classList.toggle("rotate");
    }
  });
  
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let current = "";
    for (var section of sections) {
      if (window.pageYOffset >= section.offsetTop - 280) {
        current = section.getAttribute("id");
      }
    }
  
    for (var anchor of anchors) {
      anchor.classList.remove("selected");
      if (anchor.getAttribute("href") === "#" + current) {
        anchor.classList.add("selected");
      }
    }
  });



const form = document.querySelector('form.top');


form.addEventListener('submit', (event) => {
  
  event.preventDefault();

  
  const firstName = form.querySelector('input[name="firstName"]');
  const lastName = form.querySelector('input[name="lastName"]');
  const phoneNumber = form.querySelector('input[name="phoneNumber"]');
  const subscription = form.querySelector('input[name="message"]:checked');

 
  if (firstName.value === '') {
    alert('Prašome įvesti savo vardą');
    return;
  }

  if (lastName.value === '') {
    alert('Prašome įvesti savo pavardę');
    return;
  }

  if (phoneNumber.value === '') {
    alert('Prašome įvesti savo telefono numerį');
    return;
  }

 
  if (!subscription) {
    alert('Prašome pasirinkti prenumeratos rūšį');
    return;
  }

 
  form.submit();
});
