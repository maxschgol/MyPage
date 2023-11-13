  // selector
  var menu = document.querySelector('.hamburger');

  // method
  function toggleMenu (event) {
    this.classList.toggle('is-active');
    document.querySelector( ".menuppal" ).classList.toggle("is_active");
    event.preventDefault();
  }
  
  // event
  menu.addEventListener('click', toggleMenu, false);
  




  const imageContainers = document.querySelectorAll(".componenteFoto");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay-image");
const closeOverlayButton = document.getElementById("close-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

let currentImageIndex = 0;
let images = [];

imageContainers.forEach((container, index) => {
    const image = container.querySelector("img");
    images.push(image.src);

    container.addEventListener("click", () => {
        currentImageIndex = index;
        displayImage(currentImageIndex);
    });
});

function displayImage(index) {
    overlayImage.src = images[index];
    overlay.style.display = "block";
}

closeOverlayButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage(currentImageIndex);
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage(currentImageIndex);
});

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.style.display = "none";
    }

});
// Configurar Hammer.js para detectar gestos táctiles
const hammertime = new Hammer(overlayImage);
hammertime.on("swipeleft", () => {
    // Navegar a la siguiente imagen al deslizar a la izquierda
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage(currentImageIndex);
});

hammertime.on("swiperight", () => {
    // Navegar a la imagen anterior al deslizar a la derecha
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage(currentImageIndex);
});



