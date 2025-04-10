document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("open");
        navLinks.style.display = navLinks.style.adisplay === "flex" ? "none" : "flex";
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider img");
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart");
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    // Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  
    // Add to Cart Buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", function () {
        const item = this.parentElement;
        const name = item.getAttribute("data-name");
        const price = parseFloat(item.getAttribute("data-price"));
  
        addToCart(name, price);
        updateCartDisplay();
      });
    });
  
    function addToCart(name, price) {
      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  
    function removeFromCart(name) {
      const index = cart.findIndex(item => item.name === name);
      if (index !== -1) {
        cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }
  
    function updateCartDisplay() {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach(item => {
        total += item.price * item.quantity;
  
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price} x ${item.quantity} `;
  
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
          removeFromCart(item.name);
        });
  
        li.appendChild(removeBtn);
        cartItemsContainer.appendChild(li);
      });
  
      cartTotal.textContent = total.toFixed(2);
    }
  
    clearCartBtn.addEventListener("click", () => {
      cart = [];
      localStorage.removeItem("cart");
      updateCartDisplay();
    });
  
    updateCartDisplay(); // initial load
  });
  
