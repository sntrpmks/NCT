/*Swiper*/
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  /*KELASNYA MEMBER ENCETE*/
  new Swiper('.card-wraper', {
    loop: true,
    spaceBetween:30,
    
  
  
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  /*BUAT AKTIVIN BULET BULET KECIL SWIPER*/
    breakpoints: {
      0:{
        slidesPerView:1
      },
      768:{
        slidesPerview:2
      },
      1024:{
        slidesPerView:3
      },
      
    }
  });