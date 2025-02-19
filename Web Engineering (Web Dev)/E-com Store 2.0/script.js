document.getElementById("search").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    document.querySelectorAll(".product").forEach(product => {
        const name = product.querySelector("h3").textContent.toLowerCase();
        product.style.display = name.includes(query) ? "block" : "none";
    });
});

let wishlist = [];

document.querySelectorAll(".wishlist-btn").forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");

        if (wishlist.includes(id)) {
            wishlist = wishlist.filter(item => item !== id);
            button.style.color = "black";  // Remove from wishlist
        } else {
            wishlist.push(id);
            button.style.color = "red";  // Add to wishlist
        }
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
});

document.querySelectorAll(".product").forEach(product => {
    product.addEventListener("click", () => {
        const name = product.querySelector("h3").textContent;
        const price = product.querySelector("p").textContent.replace("$", "");
        const image = product.querySelector("img").src;

        localStorage.setItem("selectedProduct", JSON.stringify({ name, price, image }));
        window.location.href = "product.html";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cart = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.parentElement;
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent;
            
            cart.push({ name: productName, price: productPrice });
            alert(`${productName} added to cart!`);
            console.log(cart);
        });
    });
});
