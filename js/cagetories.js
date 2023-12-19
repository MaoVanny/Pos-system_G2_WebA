
// function loop create categories---------
function cateoriesCard() {
    let localData = JSON.parse(localStorage.getItem('data'));
    let groupCategories = document.querySelector('#groupCategorie');
    groupCategories.innerHTML = '';
    let createCategories = document.querySelector('.btn2');
    for (let i = 0; i<localData.length; i++){
        let inputDrink = document.createElement('span');
        inputDrink.textContent = localData[i].categorie;
        inputDrink.className = 'categorie';
        inputDrink.style.display = 'flex';
        inputDrink.style.justifyContent = 'space-between';
        let deleteCategory = document.createElement('i');
        deleteCategory.setAttribute('class', 'bx bxs-x-circle');
        deleteCategory.style.width = '20px';
        deleteCategory.style.background = 'red';
        deleteCategory.addEventListener('click', deleteCategoryFromList);
        inputDrink.appendChild(deleteCategory);
        groupCategories.appendChild(inputDrink);
    }
    createCategories.addEventListener('click', addCategories)
    creatcateBar();


}


function deleteCategoryFromList(e){
    let datas = JSON.parse(localStorage.getItem('data'));
    let cateName = e.target.parentElement.textContent;
    if (window.confirm('Do you want to delete your categorie?')){
        for (let i = 0; i<datas.length; i++){
            if (datas[i].categorie === cateName){
                datas.splice(i, 1);
            }
        }
        localStorage.setItem('data', JSON.stringify(datas));
        creatcateBar();
        cateoriesCard();
    }
    categoriesCard.style.display = 'none';
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
    categoriesCard.style.display = 'none';
}

// 
let categoriesCard = document.querySelector('.categoriesCard');
function blockCategories() {
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



