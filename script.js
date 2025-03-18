document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products");

    const products = [
        { id: 1, name: "Laptop", price: 50000, image: "images/laptop.jpg" },
        { id: 2, name: "Smartphone", price: 20000, image: "images/smartphone.jpg" },
        { id: 3, name: "Headphones", price: 3000, image: "images/headphones.jpg" },
        {id: 4, name:"smartwatch", price:6000 ,image:"images/smartwatch.jpg"},
        {id: 5, name:"powerbank", price:2000 ,image:"images/powerbank.jpg"},
        {id: 6, name:"tv", price:60000 ,image:"images/tv.jpg"},
        {id: 7, name:"fan", price:10000 ,image:"images/fan.jpg"},
        {id: 8, name:"camera", price:100000 ,image:"images/camera.jpg"},
        {id: 9, name:"oven", price:75000 ,image:"images/oven.jpg"},
        {id: 10, name:"bag", price:1000 ,image:"images/bag.jpg"},
    ];

    if (productsContainer) {
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <span>${product.name} - ₹${product.price}</span>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    window.products = products;
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = window.products.find(p => p.id === productId);
    
    if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    } else {
        alert("Product not found!");
    }
}
