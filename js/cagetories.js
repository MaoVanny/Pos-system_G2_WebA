function cateoriesCard() {
    let localData = JSON.parse(localStorage.getItem('data'));

    let groupCategories = document.querySelector('#groupCategorie');
    groupCategories.innerHTML = '';
    let createCategories = document.querySelector('.btn2');
    for (let i = 0; i<localData.length; i++){
        let inputDrink = document.createElement('span');
        inputDrink.textContent = localData[i].categorie;
        inputDrink.className = 'categorie';
        groupCategories.appendChild(inputDrink);
    }
    createCategories.addEventListener('click', addCategories)


}

function addCategories(){
    let data = JSON.parse(localStorage.getItem('data'));
    let categorieName = document.querySelector('#name');
    let array = [];
    
    let obj = {};
    obj.categorie = categorieName.value;
    obj.product = array;
    data.push(obj);
    localStorage.setItem('data', JSON.stringify(data));
    categorieName.value = '';
    cateoriesCard();
}

// 
let categoriesCard = document.querySelector('.categoriesCard');
// categoriesCard.style.display = 'none';
function blockCategories() {
    // let 
    categoriesCard.style.display = 'block';
    let buttonCancel = document.querySelector('.btn1');
    buttonCancel.addEventListener('click', Cancle)
    cateoriesCard();
}

let categorieC = document.querySelector('.list-inputcategories')
let box2Span = document.querySelector('.box2');
let span = box2Span.querySelector('span')
span.addEventListener('click', blockCategories);


//  functon cancel
function Cancle() {
    categoriesCard.style.display = 'none';
}



