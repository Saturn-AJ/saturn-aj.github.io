// ========== Menu Toggle ==========
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
});

// ========== Gestures ==========
let startX = 0;
let endX = 0;

document.querySelectorAll(".card").forEach(card => {
  // Touch start
  card.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;

    // Long press detection
    card.longPressTimer = setTimeout(() => {
      card.style.backgroundColor = "#ffeb3b"; // highlight
      alert("Long press detected!");
    }, 1000);
  });

  // Touch end
  card.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    clearTimeout(card.longPressTimer);

    if (endX < startX - 50) {
      alert("You swiped left — item removed.");
    } else if (endX > startX + 50) {
      alert("You swiped right — item added to favorites.");
    }
  });
});

// ========== Show Form After Item Selected ==========
const orderSection = document.getElementById("orderSection");

const itemInput = document.getElementById("item");

const sizeOptions = document.getElementById("sizeOptions"); // size dropdown



document.querySelectorAll(".card").forEach(card => {

 card.addEventListener("click", () => {

   const selectedItem = card.getAttribute("data-item");

   const category = card.getAttribute("data-category");



   itemInput.value = selectedItem;

   orderSection.style.display = "block";

   window.scrollTo({ top: orderSection.offsetTop, behavior: "smooth" });



   // Show size options for drinks only

   if (category === "drink") {

     sizeOptions.style.display = "block";

   } else {

     sizeOptions.style.display = "none";

   }

 });

 window.addEventListener('offline', () => {

 alert('You are now offline. Your data will be saved locally.');

});

window.addEventListener('online', () => {

 alert('Connection restored! Data sync enabled.');

});

function rememberOrder() {
    localStorage.setItem('savedOrder', 'UserOrderData'); // Replace 'UserOrderData'
    alert('Order remembered!');
  }

  window.onload = function() {
    if (localStorage.getItem('savedOrder')) {
      console.log('Order found: ' + localStorage.getItem('savedOrder'));
    }
  };

});