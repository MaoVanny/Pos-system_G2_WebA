

let formCreateProduct = document.querySelector('.disPlayCategorise');
const btnCreadProduct = document.querySelector('.bx-plus');
btnCreadProduct.addEventListener('click', () => {
    formCreateProduct.style.display = 'block';
    let dataOfproduct = JSON.parse(localStorage.getItem('data'));
    let chooseCategory = document.querySelector('#options');
    chooseCategory.innerHTML = '';
    for (let categories of dataOfproduct) {
        let option = document.createElement('option');
        option.value = categories.categorie;
        option.textContent = categories.categorie;
        chooseCategory.appendChild(option);
    }
    const concelCreateProduct = document.querySelector('.fromSubnits1 .btn1FormAddProduct');
    concelCreateProduct.addEventListener('click', () => {
        formCreateProduct.style.display = 'none';
    });
    const btnCreadProduct = document.querySelector('.fromSubnits1 .btn2FormAddProduct');
    btnCreadProduct.addEventListener('click', addProductTogroupProduct);
});

function addProductTogroupProduct() {
    document.querySelector('.product-content').innerHTML = '';
    let productName = document.querySelectorAll('.inputProductname input');
    let chooseCategory = document.querySelector('#options').value;
    let dataOfproduct = JSON.parse(localStorage.getItem('data'));
    let obj = {};
    obj.img = 'Image/coca.png';
    for (let i = 0; i < productName.length; i++) {
        if (i === 0) {
            obj.name = productName[i].value;
        } else if (i === 1) {
            obj.stock = productName[i].value;
        } else if (i === 2) {
            obj.price = productName[i].value;
        }
        productName[i].value = '';

    }
    chooseCategory.value = '';
    for (let dataProduct of dataOfproduct) {
        if (dataProduct.categorie === chooseCategory) {
            let dataStore = dataProduct.product;
            dataStore.push(obj);
        }
    }
    localStorage.setItem('data', JSON.stringify(dataOfproduct));
    displayCard();
    formCreateProduct.style.display = 'none';
}

