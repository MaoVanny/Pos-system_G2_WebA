
let groupProduct = document.querySelector('.product-content');
let groupAdd = document.querySelector('.group-add');

let addData = [];
let myData = [
    {
        categorie: 'drink',
        product: [
            { img: 'Image/baya.png', name: 'baya', stock: 40, price: 1 },
            { img: 'Image/caraboa.webp', name: 'Caraboa', stock: 40, price: 1 },
            { img: 'Image/chost.png', name: 'chost', stock: 100, price: 1 },
            { img: 'Image/chost2.png', name: 'chost2', stock: 40, price: 1 },
            { img: 'Image/redbull.png', name: 'redbull', stock: 50, price: 1 },
            { img: 'Image/pepsi.png', name: 'Pepsi', stock: 40, price: 1 },
            { img: 'Image/sting.png', name: 'Sting', stock: 40, price: 1 },
            { img: 'Image/caraboa.webp', name: 'Caraboa', stock: 40, price: 1 },
            { img: 'Image/rockstar.png', name: 'rockstar', stock: 40, price: 1 },
            { img: 'Image/Vital-1500ml.png', name: 'Vital', stock: 40, price: 1 },
            { img: 'Image/sting.png', name: 'Sting', stock: 40, price: 1 },
            { img: 'Image/coca.png', name: 'Cocacola', stock: 40, price: 1 },
        ]
    },
    {
        categorie: 'food',
        product: [
            { img: 'Image/bergure.jpg', name: 'bergure1', stock: 40, price: 3 },
            { img: 'Image/mokatak.jpg', name: 'mokatak1', stock: 40, price: 1 },
            { img: 'Image/bergure.jpg', name: 'bergure', stock: 100, price: 10 },
            { img: 'Image/soryor.png', name: 'soryor', stock: 40, price: 1 },
            { img: 'Image/soryor.png', name: 'soryor', stock: 50, price: 0.99 },
            { img: 'Image/mokatak.jpg', name: 'mokatak', stock: 40, price: 3 },
            { img: 'Image/potato.jpg', name: 'DomLong', stock: 40, price: 8 },
            { img: 'Image/pizza.jpg', name: 'Pizza', stock: 40, price: 2 },
            { img: 'Image/tam1-min.png', name: 'Tamp2', stock: 40, price: 9 },
            { img: 'Image/potato.jpg', name: 'potatos', stock: 40, price: 6 },
            { img: 'Image/tam1-min.png', name: 'Tamp', stock: 40, price: 7 },
            { img: 'Image/checkend.jpg', name: 'Checkend', stock: 40, price: 4 },
            { img: 'Image/tam1-min.png', name: 'Tamp1', stock: 40, price: 5 },
        ]
    },
    {
        categorie: 'fruit',
        product: [
            { img: 'Image/avocado.webp', name: 'Avocado', stock: 40, price: 1 },
            { img: 'Image/Mango.jpg', name: 'Mango', stock: 40, price: 1 },
            { img: 'Image/avocado.webp', name: 'Avocado', stock: 40, price: 1 },
            { img: 'Image/water-melon.jpeg', name: 'water melon', stock: 40, price: 1 },
            { img: 'Image/Mango.jpg', name: 'Mango', stock: 100, price: 1 },
            { img: 'Image/Longan-Fruit.jpg', name: 'Longan', stock: 40, price: 1 },
            { img: 'Image/water-melon.jpeg', name: 'water melon', stock: 50, price: 1 },
            { img: 'Image/Mango.jpg', name: 'Mango', stock: 40, price: 1 },
            { img: 'Image/Longan-Fruit.jpg', name: 'Longan', stock: 40, price: 1 },
            { img: 'Image/mangosteen.webp', name: 'Mangosteen', stock: 40, price: 1 },
            { img: 'Image/mangosteen.webp', name: 'Mangosteen', stock: 40, price: 1 },
            { img: 'Image/dragon-fruit.jpg', name: 'Dragon Fruit', stock: 40, price: 1 },
            { img: 'Image/stopbery.jpg', name: 'Stubery', stock: 40, price: 1 },
            { img: 'Image/dragon-fruit.jpg', name: 'Dragon Fruit', stock: 40, price: 1 },
            { img: 'Image/stopbery.jpg', name: 'Stubery', stock: 40, price: 1 },
            { img: 'Image/dragon-fruit.jpg', name: 'Dragon Fruit', stock: 40, price: 1 },
        ]
    },
];

function saveData() {
    localStorage.setItem('data', JSON.stringify(myData));
    localStorage.setItem('add', JSON.stringify(addData));
}
// saveData();


function displayItemlist(data) {
    // let cardData = event.target.parentElement.parentElement;

    let card = document.createElement('div');
    card.setAttribute('class', 'card-add');
    let productName = document.createElement('span');
    productName.textContent = data.name;
    let quality = document.createElement('div');
    quality.setAttribute('class', 'qty');
    let minus = document.createElement('button');
    minus.setAttribute('class', 'minus');
    minus.textContent = '-';
    minus.addEventListener('click', DincreaseMoney);
    let qualitySpan = document.createElement('span');
    qualitySpan.textContent = '1';
    let plus = document.createElement('button');
    plus.setAttribute('class', 'plus');
    plus.textContent = '+';
    plus.addEventListener('click', increaseMoney);

    let pPrice = document.createElement('p');
    pPrice.textContent = 'Price: ';
    let price = document.createElement('span');
    price.textContent = data.price;
    let icon = document.createElement('i');
    icon.setAttribute('class', 'bx bxs-trash');
    icon.addEventListener('click', deleteCardList);

    groupAdd.appendChild(card);
    card.appendChild(productName);
    card.appendChild(quality);
    quality.appendChild(minus);
    quality.appendChild(qualitySpan);
    quality.appendChild(plus);
    card.appendChild(pPrice);
    pPrice.appendChild(price);
    card.appendChild(icon);
}

// payment=======================================
    // increase money===============/

function increaseMoney(e){
    let name = e.target.parentElement.parentElement.children[0].textContent;
    let productName = document.querySelectorAll('.card-product h4');
    let productPrice = 0;
    let stock = 0;
    for (let nameProduct of productName){
        if (nameProduct.textContent === name){
            productPrice = ((nameProduct.parentElement.children[2].children[1].children[0].textContent).slice(0, -1));
            stock = (nameProduct.parentElement.children[2].children[0].children[0].textContent);
        }
    }
    

    let cardadd = e.target.parentElement.children[1];
    const price = (e.target.parentElement.parentElement.children[2].children[0].textContent).slice(0, -1);
    if (parseInt(cardadd.textContent) < parseInt(stock)) {
        e.target.parentElement.children[1].textContent = parseInt(e.target.parentElement.children[1].textContent) + 1;
        e.target.parentElement.parentElement.children[2].children[0].textContent = parseInt(price) + parseInt(productPrice) +'$'; 
    };
}

    // dincreaseMoney==========================///
function DincreaseMoney(e){
    let name = e.target.parentElement.parentElement.children[0].textContent;
    let productName = document.querySelectorAll('.card-product h4');
    let productPrice = 0;
    for (let nameProduct of productName){
        if (nameProduct.textContent === name){
            productPrice = ((nameProduct.parentElement.children[2].children[1].children[0].textContent).slice(0, -1));
        }
    }
    
    let cardadd = e.target.parentElement.children[1];
    const price = (e.target.parentElement.parentElement.children[2].children[0].textContent).slice(0, -1);
    if (parseInt(cardadd.textContent) > 1) {
        e.target.parentElement.children[1].textContent = parseInt(e.target.parentElement.children[1].textContent) - 1;
        e.target.parentElement.parentElement.children[2].children[0].textContent = parseInt(price) - parseInt(productPrice) +'$'; 
    };
}



function storeDataCardlist(event){
    let data = JSON.parse(localStorage.getItem('add'));
    let cardData = event.target.parentElement.parentElement;
    let obj = {};
    let isDuplicate = true;
    for (let dt of data){
        if (dt.name === cardData.children[1].textContent){
            isDuplicate = false;
        }
    }

    if (isDuplicate){
        obj.name = cardData.children[1].textContent;
        obj.price = cardData.children[2].children[1].children[0].textContent;
        data.push(obj);
        // data = [];
        localStorage.setItem('add', JSON.stringify(data));
    }
    
    
    getDataStoragetoDp();
}

function getDataStoragetoDp(){
    groupAdd.innerHTML = '';
    let datas = JSON.parse(localStorage.getItem('add'));
    for (let data of datas){
        displayItemlist(data);
    }
}
getDataStoragetoDp();

function deleteCardList(e){
    let productName = e.target.parentElement.children[0].textContent;
    let datas = JSON.parse(localStorage.getItem('add'));
    for (let i = 0; i < datas.length; i++){
        if (productName === datas[i].name){
            if (window.confirm('Do you want to delete your card?')){
                datas.splice(i, 1);
            }
            
        }
        
    }
    localStorage.setItem('add', JSON.stringify(datas));
    getDataStoragetoDp();
}

function creatCard(value) {
    let datas = value.product;
    for (let data of datas) {
        let img = 'url' + '(' + ('../' + data.img) + ')';
        let cardProduct = document.createElement('div');
        cardProduct.setAttribute('class', 'card-product');

        let imgProduct = document.createElement('div');
        imgProduct.setAttribute('class', 'product-img');
        imgProduct.style.backgroundImage = String(img);

        let productName = document.createElement('h4');
        productName.textContent = data.name;

        let cardFooter = document.createElement('div');
        cardFooter.setAttribute('class', 'cardfooter');

        let stock = document.createElement('p');
        stock.textContent = 'Stock: ';
        let numberofStock = document.createElement('span');
        numberofStock.textContent = data.stock;

        let price = document.createElement('p');
        price.textContent = 'Price: ';
        let numberofPrice = document.createElement('span');
        numberofPrice.textContent = data.price + '$';

        let btn = document.createElement('button');
        btn.setAttribute('class', 'btn-add');
        btn.textContent = 'add';
        btn.addEventListener('click', storeDataCardlist);


        groupProduct.appendChild(cardProduct);
        cardProduct.appendChild(imgProduct);
        cardProduct.appendChild(productName);
        cardProduct.appendChild(cardFooter);
        cardFooter.appendChild(stock);
        stock.appendChild(numberofStock);
        cardFooter.appendChild(price);
        price.appendChild(numberofPrice);
        cardFooter.appendChild(btn);


    }
}


// storeDataCardlist();

function displayCard() {
    let cardData = JSON.parse(localStorage.getItem('data'));
    for (let card of cardData) {
        creatCard(card);
    }
}


let categories = document.querySelectorAll('.type-bar p');
categories[0].addEventListener('click', () => {
    groupProduct.innerHTML = '';
    displayCard();
    let cardName = document.querySelectorAll('.card-product h4');
    search(cardName);
});

displayCard();
categories[1].addEventListener('click', () => {
    groupProduct.innerHTML = '';
    let cardData = JSON.parse(localStorage.getItem('data'));
    creatCard(cardData[0]);
    let cardName = document.querySelectorAll('.card-product h4');
    search(cardName);
})
categories[2].addEventListener('click', () => {
    groupProduct.innerHTML = '';
    let cardData = JSON.parse(localStorage.getItem('data'));
    creatCard(cardData[1]);
    let cardName = document.querySelectorAll('.card-product h4');
    search(cardName);
})
categories[3].addEventListener('click', () => {
    groupProduct.innerHTML = '';
    let cardData = JSON.parse(localStorage.getItem('data'));
    creatCard(cardData[2]);
    let cardName = document.querySelectorAll('.card-product h4');
    search(cardName);

})