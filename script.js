document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "RTX 3080 Graphics Card", category: "pc-parts", link: "#", image: "assets/rtx3080.jpg" },
        { name: "Cyberpunk 2077 Game Key", category: "games", link: "#", image: "assets/cyberpunk.jpg" },
        { name: "Gaming Laptop", category: "laptops", link: "#", image: "assets/laptop.jpg" }
    ];

    const productList = document.getElementById("productList");
    if (productList) {
        products.forEach(product => {
            let div = document.createElement("div");
            div.classList.add("product-card");
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="100%">
                <h3>${product.name}</h3>
                <a href="${product.link}" target="_blank">Buy Now</a>
            `;
            productList.appendChild(div);
        });
    }

    const searchBar = document.getElementById("searchBar");
    if (searchBar) {
        searchBar.addEventListener("input", function(e) {
            let value = e.target.value.toLowerCase();
            document.querySelectorAll(".product-card").forEach(card => {
                let text = card.innerText.toLowerCase();
                card.style.display = text.includes(value) ? "block" : "none";
            });
        });
    }
});
