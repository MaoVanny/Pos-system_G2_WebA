function cartsProduct() {
    let disPlayCategorise = document.querySelector('.disPlayCategorise');

    let CartCategorise = document.createElement('div');
    CartCategorise.className = 'CartCategorise';
    let h2Products = document.createElement('h2');
    h2Products.textContent = 'Add new Products';

    let inputProductname = document.createElement('div');
    inputProductname.className = 'inputProductname';

    let h4Productname = document.createElement('h4');
    h4Productname.textContent = 'Product :';
    let inputProduct = document.createElement('input');
    inputProduct.type = 'text';
    inputProduct.className = 'nameproduct';
    inputProduct.id = 'nameproduct';
    inputProduct.placeholder = 'Name of Products';

    let inputProductnameStock = document.createElement('div');
    inputProductnameStock.className = 'inputProductname';

    let h4Stock = document.createElement('h4');
    h4Stock.textContent = 'Stock :';
    let inputStocks = document.createElement('input');
    inputStocks.type = 'text';
    inputStocks.className = 'stock';
    inputStocks.id = 'stock';
    inputStocks.placeholder = 'Number of stocks';

    let inputProductnamePrices = document.createElement('div');
    inputProductnamePrices.className = 'inputProductname';

    let h4Prices = document.createElement('h4');
    h4Prices.textContent = 'Price :';
    let inprices = document.createElement('input');
    inprices.type = 'text';
    inprices.className = 'price';
    inprices.id = 'price';
    inprices.placeholder = 'Price';

    let inputProductnameOptions = document.createElement('div');
    inputProductnameOptions.className = 'inputProductname';

    let h4Options = document.createElement('h4');
    h4Options.textContent = 'Categories :';

    let select = document.createElement('select');
    select.name = 'option';
    select.id = 'options';

    let optionQuestion = document.createElement('option');
    optionQuestion.value = ' ';
    optionQuestion.textContent = 'What kind of category?';

    let optionFruit = document.createElement('option');
    optionFruit.value = 'Fruits';
    optionFruit.textContent = 'Fruits';

    let optionDrinks = document.createElement('option');
    optionDrinks.value = 'Drinks';
    optionDrinks.textContent = 'Drinks';

    let optionFood = document.createElement('option');
    optionFood.value = 'Foods';
    optionFood.textContent = 'Foods';

    let inputProductnameOptionsImages = document.createElement('div');
    inputProductnameOptionsImages.className = 'inputProductname';

    let h4Images = document.createElement('h4');
    h4Images.textContent = 'Product Images :';
    let inputImages = document.createElement('input');
    inputImages.type = 'file';
    inputImages.className = 'pic';
    inputImages.id = 'pic';
    inputImages.value = '';

    let buttons = document.createElement('div');
    buttons.className = 'formSubmits';

    let btnCancel = document.createElement('button');
    btnCancel.className = 'btn1';
    btnCancel.textContent = 'Cancel';

    let btnCreate = document.createElement('button');
    btnCreate.className = 'btn2';
    btnCreate.textContent = 'Create';

    disPlayCategorise.appendChild(CartCategorise);

    CartCategorise.appendChild(h2Products);
    CartCategorise.appendChild(inputProductname);
    inputProductname.appendChild(h4Productname);
    inputProductname.appendChild(inputProduct);
    CartCategorise.appendChild(inputProductnameStock);
    inputProductnameStock.appendChild(h4Stock);
    inputProductnameStock.appendChild(inputStocks);
    CartCategorise.appendChild(inputProductnamePrices);
    inputProductnamePrices.appendChild(h4Prices);
    inputProductnamePrices.appendChild(inprices);
    CartCategorise.appendChild(inputProductnameOptions);
    inputProductnameOptions.appendChild(h4Options);
    inputProductnameOptions.appendChild(select);
    select.appendChild(optionQuestion);
    select.appendChild(optionFruit);
    select.appendChild(optionDrinks);
    select.appendChild(optionFood);
    CartCategorise.appendChild(inputProductnameOptionsImages);
    inputProductnameOptionsImages.appendChild(h4Images);
    inputProductnameOptionsImages.appendChild(inputImages);
    buttons.appendChild(btnCancel);
    buttons.appendChild(btnCreate);
    CartCategorise.appendChild(buttons);
    disPlayCategorise.appendChild(CartCategorise);
}

//  hiden product card_____________________
let disPlayCategorise = document.querySelector('.disPlayCategorise');
disPlayCategorise.style.display = 'none';

function displayProducts() {
    if (span) {
        disPlayCategorise.style.display = 'block';
    }
}

let span = document.querySelector('.bx-plus');
span.addEventListener('click', displayProducts);

//  form cancel ________________
function cancelCardproduct() {
    if (buttons) {
        disPlayCategorise.style.display = 'none';
    } 
}

let buttons = document.querySelector('.btn1');
buttons.addEventListener('click', cancelCardproduct)


// add card to product_________________________________

let groupProducts = document.querySelector('.product-content');
function productAddToCart() {
    let inputProductName = document.querySelector('.nameproduct').value;
    let inputStock = document.querySelector('.stock').value;
    let inputPrice = document.querySelector('.price').value;
    let select = document.querySelector('select');
    let selectedOption = select.value;

    let product = {
        name: inputProductName,
        stock: inputStock,
        price: inputPrice,
        selectedOption: selectedOption
    };

    let cartItems = JSON.parse(localStorage.getItem('cart'));
    // cartItems.push(product);
    localStorage.setItem('cart', JSON.stringify(cartItems));

    createCard(product);
    console.log(cartItems);
}


// create cardProdect in card-product__________________________
function createCard(item) {
    let cardProduct = document.createElement('div');
    cardProduct.setAttribute('class', 'card-product');

    let productName = document.createElement('h4');
    productName.textContent = item.name;

    let cardFooter = document.createElement('div');
    cardFooter.setAttribute('class', 'cardfooter');

    let stock = document.createElement('p');
    stock.textContent = 'Stock: ';
    let numberofStock = document.createElement('span');
    numberofStock.textContent = item.stock;

    let price = document.createElement('p');
    price.textContent = 'Price: ';
    let numberofPrice = document.createElement('span');
    numberofPrice.textContent = item.price + '$';

    let btn = document.createElement('button');
    btn.setAttribute('class', 'btn-add');
    btn.textContent = 'add';

    cardProduct.appendChild(productName);
    cardProduct.appendChild(cardFooter);
    cardFooter.appendChild(stock);
    stock.appendChild(numberofStock);
    cardFooter.appendChild(price);
    price.appendChild(numberofPrice);
    cardFooter.appendChild(btn);

    groupProducts.appendChild(cardProduct);
}

let btnAdd = document.querySelector('.btn2');
console.log(btnAdd)
btnAdd.addEventListener('click', ()=>{
    productAddToCart()
    disPlayCategorise.style.display = 'none';
});



