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
    },
    {
        "name": "Maki Gurke",
        "price": 3.80
    },
    {
        "name": "Maki Hühnchen",
        "price": 4.60
    },
    {
        "name": "Maki Thunfisch",
        "price": .60
    },
    {
        "name": "Maki Thunfisch",
        "price": .60
    },
    {
        "name": "Maki Thunfisch",
        "price": .60
    },
    {
        "name": "Maki Thunfisch",
        "price": .60
    },
    {
        "name": "Maki Thunfisch",
        "price": .60
    },
    {
        "name": "Maki Thunfisch",
        "price": .60
    },
    {
        "name": "Maki Thunfisch",
        "price": .60
    },
    {
        "name": "Maki Aal",
        "price": 8.60
    },
]
let cartContent = [];
let deliveryCost = 0;
let finalSumNumber = 0;

function loadMenuItems() {
    document.getElementById('all-items-container').innerHTML = '';
    for (let i = 0; i < restaurantItems.length; i++) {
        document.getElementById('all-items-container').innerHTML += `
        <div class="menuitem-container" id="menuitem-container${i}"> 
            <div class="plus-icon-container" id="plus-icon-container${i}" onclick="addItemToCart(this.id)">
                <img src="img/icons/plus-8-32.png">
            </div>
            <h2>${restaurantItems[i]["name"]}</h2>
            <p>${restaurantItems[i]["price"]}0€</p>
        </div>
    `;
    }
}

function addItemToCart(id) {
    showCart()
    let menuItemNumber = id.slice(-1);
    if (cartContent.includes(`${restaurantItems[menuItemNumber]["name"]}`)) {
        document.getElementById(`counter${menuItemNumber}`).innerHTML = parseInt(document.getElementById(`counter${menuItemNumber}`).innerHTML, 10) + 1;
        cartContent.push(restaurantItems[menuItemNumber]["name"]);
    } else {
        cartContent.push(restaurantItems[menuItemNumber]["name"]);

        document.getElementById("cart-content-container").innerHTML += `
        <div id="cart-item-container${menuItemNumber}" class="cart-item-container">
            <div class="item-container">
                <p id="counter${menuItemNumber}" style="font-size: 18px">1</p>
                <p>${restaurantItems[menuItemNumber]["name"]}</p>
            </div>
            <div class="item-container">
                <div class="plus-minus-container">
                    <img onclick="addItemToCart(this.id)" id="image${menuItemNumber}" src="img/icons/plus-8-32.png">
                    <img onclick="deleteItemFromCart(this.id)" id="image${menuItemNumber}" src="img/icons/minus-32.png">
                </div>
                <p>${restaurantItems[menuItemNumber]["price"]}0€</p>
            </div>
        </div>
    `;
    }
    console.log(cartContent);
    calculateFinalSum(menuItemNumber);
}

function calculateFinalSum(menuItemNumber) {
    firstcount = parseFloat(restaurantItems[menuItemNumber]["price"]);
    finalSumNumber += firstcount;
    document.getElementById('final-sum').innerHTML = `${finalSumNumber.toFixed(2)}€`;
    finalSumPlusDelivery(finalSumNumber);
}

function finalSumPlusDelivery(finalSumNumber) {
    if (finalSumNumber < 40) {
        deliveryCost = 5;
    } else {
        deliveryCost = 0;
        document.getElementById('delivery-cost').style = "color: green"
    }
    document.getElementById('delivery-cost').innerHTML = `${deliveryCost},00€`;
    calcTotalSum(finalSumNumber, deliveryCost);
}

function calcTotalSum(finalSumNumber) {
    let totalSum = parseFloat(finalSumNumber) + parseFloat(deliveryCost);
    totalSum = totalSum.toFixed(1);
    document.getElementById('total-cost').innerHTML = `${totalSum}0€`;
}

function showCart() {
    document.getElementById('final-sum-container').classList.remove('d-none');
    document.getElementById('delivery-cost-container').classList.remove('d-none');
    document.getElementById('total-container').classList.remove('d-none');
    document.getElementById('button-container').classList.remove('d-none');
}

function addCountWithPlusButton(id) {
    let menuitem = id.slice(-1);
    let price = restaurantItems[0]["price"];
    finalSumNumberArray.push(price);
    cartContent.push(restaurantItems[menuitem]["name"]);
    calculateFinalSum(menuitem)
}

function hideCart() {
    console.log(cartContent);
    if (finalSumNumber === 0) {
        document.getElementById('final-sum-container').classList.add('d-none');
        document.getElementById('delivery-cost-container').classList.add('d-none');
        document.getElementById('total-container').classList.add('d-none');
        document.getElementById('button-container').classList.add('d-none');
    }
    
}

function deleteItemFromCart(id) {
    menuItemNumber = id.slice(-1);
    console.log(finalSumNumber, cartContent)
    // delete numbers from arrays and counter
    let counter = parseInt(document.getElementById(`counter${menuItemNumber}`).innerHTML);
    document.getElementById(`counter${menuItemNumber}`).innerHTML = parseInt(document.getElementById(`counter${menuItemNumber}`).innerHTML, 10) - 1;
    finalSumNumber -= restaurantItems[menuItemNumber]["price"]
    cartContent.pop(restaurantItems[menuItemNumber]["name"]);

    // update numbers in HTML
    document.getElementById('final-sum').innerHTML = `${finalSumNumber.toFixed(2)}€`;
    console.log(finalSumNumber, cartContent);

    //udpate total number + delivery fee
    finalSumPlusDelivery(finalSumNumber);

    // if counter = 0, delete cartitem
    if (counter === 1) {
        document.getElementById(`cart-item-container${menuItemNumber}`).remove();
    }
    hideCart()
    
}

