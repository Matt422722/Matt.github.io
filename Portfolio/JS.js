//These functions open and close the contact form
function openForm(){
    document.getElementById("myForm").style.display = "block";
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";
}

//This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//This function changes the slide when the left or right arrows are clicked
function plusSlides(n){
    showSlides(slideIndex += n);
}

//This function changes the slide when the dots are clicked
function currentSlide(n){
    showSlides(slideIndex = n);
}


function showSlides(n){
    var slides = document.getElementsByClassName("mySlides"); //This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); //This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; //If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //This adds the active styling to the dot associated with the image
}

//This code will create close the contact form when the user clicks off of it
//The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    //Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

//This code brings the user back to the top of the page when button is clicked//
window.onscroll = function() {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("backToTop").style.display = "block";
    } else {
      document.getElementById("backToTop").style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  document.getElementById("backToTop").addEventListener("click", topFunction);
  
//TimeApp
function fetchTime() {
  fetch('currentTime.txt') // Fetch from the file
      .then(response => response.text())
      .then(data => {
          const timeBox = document.getElementById('time-box');
          
          // Only update the time if it has changed to avoid unnecessary re-renders
          if (timeBox.textContent !== data) {
              timeBox.textContent = data;
          }
      })
      .catch(error => {
          document.getElementById('time-box').textContent = "Error loading time";
      });
}

// Update the time every minute (60,000 milliseconds)
setInterval(fetchTime, 60000);

// Initial call to display the time immediately
fetchTime();


