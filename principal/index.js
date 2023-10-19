    //Hamburquesa
    const menu = document.querySelector('.hamburger');

    function toggleMenu (event) {
      this.classList.toggle('is-active');
      document.querySelector( ".menuppal" ).classList.toggle("is_active");
      event.preventDefault();
    }
    // event
    menu.addEventListener('click', toggleMenu, false);



    //Imagen principal
    gsap.registerPlugin(ScrollTrigger);

    let element = document.querySelector(".img1");
    gsap.set(element, { y: -2000,
   
    });
    
   gsap.to(".img1",{
    ScrollTrigger:{
      trigger: ".c",
      toggleActions: "restart pause reverse pause"
    },
    y:0,
    duration:1
   })