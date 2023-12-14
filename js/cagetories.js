function cateoriesCard() {
    let cardcategories = document.createElement("div");
    cardcategories.className = 'cardcategories';

    let h3 = document.createElement('h3');
    h3.textContent = 'Add New Categories';

    let inputcategories = document.createElement('div');
    inputcategories.className = "inputcategories";

    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.id = "name";
    inputName.className = 'name';
    inputName.placeholder = 'Name of Categories';

    let list_inputcategories = document.createElement('div');
    list_inputcategories.className = "list-inputcategories";

    let inputDrink = document.createElement('input');
    inputDrink.type = 'text';
    inputDrink.id = "drinks";
    inputDrink.className = 'drinks';
    inputDrink.placeholder = 'Drinks';

    let inputFood = document.createElement('input');
    inputFood.type = 'text';
    inputFood.id = "food";
    inputFood.className = 'food';
    inputFood.placeholder = 'Foods';

    let inputFruits = document.createElement('input');
    inputFruits.type = 'text';
    inputFruits.id = "fruit";
    inputFruits.className = 'fruit';
    inputFruits.placeholder = 'Fruits';

    let imgPic = document.createElement('div');
    imgPic.className = 'imgPic';

    let img = document.createElement('img');
    img.src = './Image/shopping.png';

    let fromSubnits = document.createElement('div');
    fromSubnits.className = 'fromSubnits';

    let btn1 = document.createElement('button');
    btn1.className = 'btn1';
    btn1.id = 'btn1'
    btn1.textContent = 'Cancle';

    let btn2 = document.createElement('button');
    btn2.className = 'btn2';
    btn2.textContent = 'Create'

    cardcategories.appendChild(h3);
    cardcategories.appendChild(inputcategories);
    inputcategories.appendChild(inputName)
    cardcategories.appendChild(list_inputcategories);
    list_inputcategories.appendChild(inputDrink)
    list_inputcategories.appendChild(inputFood)
    list_inputcategories.appendChild(inputFruits);
    list_inputcategories.appendChild(imgPic);
    imgPic.appendChild(img);
    cardcategories.appendChild(fromSubnits);
    fromSubnits.appendChild(btn1)
    fromSubnits.appendChild(btn2)
    categoriesCard.appendChild(cardcategories)

}


// 
let categoriesCard = document.querySelector('.categoriesCard');
categoriesCard.style.display = 'none';
function blockCategories() {
    // let 
    let isSpanTrue = false;
    if (span) {
        categoriesCard.style.display = 'block';
        isSpanTrue = true;
    }
}

let box2Span = document.querySelector('.box2');
let span = box2Span.querySelector('span')
span.addEventListener('click', blockCategories);
cateoriesCard()


//  functon cancel
function Cancle() {
    if (buttonCancel) {
        categoriesCard.style.display = 'none';
    }
}
let buttonCancel = document.getElementById('btn1');
buttonCancel.addEventListener('click', Cancle)


