let cart = [];
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const cartItems = document.getElementById("cart-items");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const price = parseFloat(button.getAttribute("data-price"));
        
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ id, price, quantity: 1 });
        }
        
        updateCart();
    });
});

function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal.textContent = cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
    
    cartItems.innerHTML = "";
    cart.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `Product ${item.id} x${item.quantity} - $${item.price * item.quantity}`;
        cartItems.appendChild(div);
    });
}

document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Checkout Complete!");
    cart = [];
    updateCart();
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
