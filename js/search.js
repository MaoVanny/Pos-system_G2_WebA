let searchProduct = document.querySelector('.navbar input');

function search(){
    let productName = document.querySelectorAll('.card-product h4');
    for (let product of productName){
        if (product.textContent.toLocaleLowerCase().includes(searchProduct.value.toLocaleLowerCase())){
            product.parentElement.classList.remove('hide');
        }else {
            product.parentElement.classList.add('hide');
        }
    }
};
searchProduct.addEventListener('keyup', search);

