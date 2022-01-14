let restaurantItems = [
    {
        "name": "Maki Lachs",
        "price": 4.50
    },
    {
        "name": "Maki Avocado",
        "price": 3.50
    },
    {
        "name": "Maki Mango",
        "price": 4.20
    }
]
let cartContent = []

function loadMenuItems() {
    document.getElementById('all-items-container').innerHTML = '';
    for (let i = 0; i < restaurantItems.length; i++) {
        document.getElementById('all-items-container').innerHTML += `
        <div class="menuitem-container" id="menuitem-container${i}"> 
            <div class="plus-icon-container" onclick="addItemToCart()">
                <img src="/img/icons/plus-8-32.png">
            </div>
            <h2>${restaurantItems[i]["name"]}</h2>
            <p>${restaurantItems[i]["price"]}0€</p>
        </div>
    `;
    }
}

function addItemToCart() {
    document.getElementById("cart-content-container").innerHTML += `
        <div id="cart-item-container" class="cart-item-container">
            <p>1</p>
            <p>Maki Lachs</p>
            <div class="plus-minus-container">
                 <a href="#" class="">+</a>
                 <a href="#" class="">-</a>
            </div>
            <p>4,50€</p>
        </div>
    

    `;
}