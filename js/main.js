
let groupProduct = document.querySelector('.product-content');
let groupAdd = document.querySelector('.group-add');
let searchP = document.querySelector('.search-product input');


let addData = [];
let myData = [
    {
        categorie: 'drink',
        product: [
            {img: 'Image/baya.png', name: 'baya', stock: 40, price: 1},
            {img: 'Image/baya.png', name: 'baya', stock: 40, price: 1},
            {img: 'Image/chost.png', name: 'chost', stock: 100, price: 1},
            {img: 'Image/chost2.png', name: 'chost2', stock: 40, price: 1},
            {img: 'Image/redbull.png', name: 'redbull', stock: 50, price: 1},
            {img: 'Image/rockstar.png', name: 'rockstar', stock: 40, price: 1},
        ]
    },
    {
        categorie: 'food',
        product: [
            {img: 'Image/baya.png', name: 'baya', stock: 40, price: 1},
            {img: 'Image/baya.png', name: 'baya', stock: 40, price: 1},
            {img: 'Image/chost.png', name: 'chost', stock: 100, price: 1},
            {img: 'Image/chost2.png', name: 'chost2', stock: 40, price: 1},
            {img: 'Image/redbull.png', name: 'redbull', stock: 50, price: 1},
            {img: 'Image/rockstar.png', name: 'rockstar', stock: 40, price: 1},
        ]
    },
    {
        categorie: 'fruit',
        product: [
            {img: 'Image/baya.png', name: 'baya', stock: 40, price: 1},
            {img: 'Image/baya.png', name: 'baya', stock: 40, price: 1},
            {img: 'Image/chost.png', name: 'chost', stock: 100, price: 1},
            {img: 'Image/chost2.png', name: 'chost2', stock: 40, price: 1},
            {img: 'Image/redbull.png', name: 'redbull', stock: 50, price: 1},
            {img: 'Image/rockstar.png', name: 'rockstar', stock: 40, price: 1},
        ]
    },
];

function saveData (){
    localStorage.setItem('data', JSON.stringify(myData));
    localStorage.setItem('add', JSON.stringify(addData));
}
// saveData();



function displayItemlist(event){
    let cardData = event.target.parentElement.parentElement;
    let card = document.createElement('div');
    card.setAttribute('class', 'card-add');

    let productName = document.createElement('span');
    productName.textContent = cardData.children[1].textContent;

    let quality = document.createElement('div');
    quality.setAttribute('class', 'qty');

    let minus = document.createElement('button');
    minus.setAttribute('class', 'minus');
    minus.textContent = '-';
    minus.addEventListener('click', (e)=>{
        let cardadd = e.target.parentElement.children[1];
        if (parseInt(cardadd.textContent) > 0){
            e.target.parentElement.children[1].textContent = parseInt(e.target.parentElement.children[1].textContent) - 1;
        }
    });

    let qualitySpan = document.createElement('span');
    qualitySpan.textContent = '1';

    let plus = document.createElement('button');
    plus.setAttribute('class', 'plus');
    plus.textContent = '+';
    plus.addEventListener('click', (e)=>{
        let cardadd = e.target.parentElement.children[1];
        if (parseInt(cardadd.textContent) < parseInt(cardData.children[2].children[0].children[0].textContent)){
            e.target.parentElement.children[1].textContent = parseInt(e.target.parentElement.children[1].textContent) + 1;
        }
        
    });


    let pPrice = document.createElement('p');
    pPrice.textContent = 'Price: ';
    let price = document.createElement('span');
    price.textContent = cardData.children[2].children[1].children[0].textContent;

    let icon = document.createElement('i');
    icon.setAttribute('class', 'bx bxs-trash');



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

function creatCard(value){
    let datas = value.product;
    for (let data of datas){
        let img = 'url' + '('+ ('../' + data.img) + ')';
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
        btn.addEventListener('click', displayItemlist)


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

function displayCard (){
    let cardData = JSON.parse(localStorage.getItem('data'));
    for (let card of cardData){
        creatCard(card);
    }
}

// search-------------------------------------//
// function searchProduct(){
//     let h4 = document.querySelectorAll('h4');
//     for (let )
// }

displayCard();