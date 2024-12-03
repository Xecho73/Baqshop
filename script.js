const images = ["images/bag.jpg", "images/plate.jpg", "images/bag2.jpg", "images/plate2.jpg", "images/bag3.jpg", "images/plate3.jpg", "images/bag4.jpg", "images/plate4.jpg", "images/bag5.jpg", "images/plate5.jpg"];


const productImage = document.getElementById("product-image");


let currentImageIndex = 0;


function changeImage() {

  productImage.classList.add("blur-effect");

 
  setTimeout(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    productImage.src = images[currentImageIndex];
   
    productImage.classList.remove("blur-effect");
  }, 300);
}
setInterval(changeImage, 3000);