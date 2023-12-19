let searchProduct = document.querySelector('.navbar input');
let inputSearchAdd = document.querySelector('.search-add input');

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


function addSearch(){
    let cardAdd = document.querySelectorAll('.card-add');
    for (let card of cardAdd){
        if (card.children[0].textContent.includes(inputSearchAdd.value)){
            card.classList.remove('hide');
        }else{
            card.classList.add('hide');
        }
    }
}
inputSearchAdd.addEventListener('keyup', addSearch);