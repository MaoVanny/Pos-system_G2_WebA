
let ProductCalling = document.querySelector('.search-add input');

function searchItems() {
    let ItemSearch = document.querySelectorAll('.card-add span:first-child');
    for (let searchItem of ItemSearch) {
        console.log(searchItem)
        if (searchItem.textContent.toLowerCase().includes(ProductCalling.value.toLowerCase())) {
            searchItem.parentElement.classList.remove('hide');
        } else {
            searchItem.parentElement.classList.add('hide');
        }
    }
} 

ProductCalling.addEventListener('keyup', searchItems);