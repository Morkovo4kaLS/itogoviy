const items = [
    {
        "id": 0,
        "name": "Носочки с болтиками",
        "cost": 300,
        "color": 1
    },
    {
        "id": 1,
        "name": "Носочки с болтиками",
        "cost": 300,
        "color": 2
    },
    {
        "id": 2,
        "name": "Носочки с болтиками",
        "cost": 300,
        "color": 3
    },
    {
        "id": 3,
        "name": "Носочки с жабками",
        "cost": 500,
        "color": 11
    },
    {
        "id": 4,
        "name": "Носочки с жабками",
        "cost": 500,
        "color": 12
    },
    {
        "id": 5,
        "name": "Носочки с жабками",
        "cost": 500,
        "color": 13
    }
]

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const addToCart = () => {
    const i = document.getElementById("imgId");
    const a = i.firstElementChild;

    const existingItem = cart.find(item => item.id == a.id);

    if (existingItem) {
        existingItem.quantity++;
        localStorage.setItem('cart', JSON.stringify(cart));
    } else {
        cart.push({...items[a.id], quantity: 1});
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

const clearCart = () => {
    localStorage.removeItem('cart');
    cart = [];
    document.getElementById("modalWrap").innerHTML = `<div class="text">Корзина пуста</div>`
}

const test = () => {
    console.log(cart);
}

const choose = (id) => {
    let i = document.getElementById("imgId");

    switch (id) {
        case 0:
            i.innerHTML = `<img src="img/1.jpg" id="${id}">`
            break;
        case 1:
            i.innerHTML = `<img src="img/2.jpg" id="${id}">`
            break;
        case 2:
            i.innerHTML = `<img src="img/3.jpg" id="${id}">`
            break;

        case 3:
            i.innerHTML = `<img src="img/11.jpg" id="${id}">`
            break;
        case 4:
            i.innerHTML = `<img src="img/12.jpg" id="${id}">`
            break;
        case 5:
            i.innerHTML = `<img src="img/13.jpg" id="${id}">`
            break;
    
        default:
            break;
    }
}




var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const modalWrap = document.getElementById("modalWrap")

btn.onclick = function() {
    let i = 0;
    let a = 0;

    while (cart[i]) {
        
        modalWrap.innerHTML += `<div class="item">
        <div style="display: flex; align-items: center; gap: 20px;">
            <img src="img/${cart[i].color}.jpg" class="item-img">
            <div class="info">
                <div class="info-name">${cart[i].name}</div>
                <div class="info-content">Описание</div>
            </div>
        </div>
        <div class="price">${cart[i].quantity}шт. | ₽ ${cart[i].cost * cart[i].quantity}</div>
    </div>`
        a += cart[i].cost * cart[i].quantity;
        i++;
    }
    if(cart[0]) {
        modalWrap.innerHTML += `<div style="float: right; font-size: 22px; font-weight: bold"><span style="font-weight: normal">Общая сумма</span>: ₽ ${a}</div>
        <div class="btn" style="margin-top: 40px" onclick="clearCart()">Очистить корзину</div>`;
    }

    if(!cart[0]){
        modalWrap.innerHTML = `<div class="text">Корзина пуста</div>`
    }

    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";

    while (modalWrap.firstChild) {
        modalWrap.removeChild(modalWrap.firstChild);
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        while (modalWrap.firstChild) {
            modalWrap.removeChild(modalWrap.firstChild);
        }
    }
}