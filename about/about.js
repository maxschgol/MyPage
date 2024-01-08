    //Hamburquesa
    const menu = document.querySelector('.hamburger');

    function toggleMenu (event) {
      this.classList.toggle('is-active');
      document.querySelector( ".menuppal" ).classList.toggle("is_active");
      event.preventDefault();
    }
    // event
    menu.addEventListener('click', toggleMenu, false);

