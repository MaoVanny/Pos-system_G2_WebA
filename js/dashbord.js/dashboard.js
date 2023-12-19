
let dashBoardPrice = document.querySelectorAll('.displayform h1');

function displayDashBoard (){
    let dataDash = JSON.parse(localStorage.getItem('totalDash'));
    let dataPay = JSON.parse(localStorage.getItem('data'));
    let totalStock = 0;
    let catagory = 0;
    dashBoardPrice[2].textContent = dataDash.price + '$';
    dashBoardPrice[1].textContent = dataDash.itemSold;
    for (let datas of dataPay){
        catagory += 1;
        for (let data of datas.product){
            totalStock += data.stock;
        }
    }
    dashBoardPrice[3].textContent = totalStock;
    dashBoardPrice[0].textContent = catagory;
}

displayDashBoard();


// -----------show low product and hight product---------------------//
function lowStock(data){
    
    let tbodyD = document.querySelector('tbody');
    let tr = document.createElement('tr');
    tr.style.textAlign = 'center';
    let tdName = document.createElement('td');
    tdName.textContent = data.name;
    let tdStock = document.createElement('td');
    tdStock.textContent = data.stock;
    let tdPrice = document.createElement('td');
    tdPrice.textContent = data.price;

    tr.appendChild(tdName);
    tr.appendChild(tdStock);
    tr.appendChild(tdPrice);
    tbodyD.appendChild(tr);
   
}



function loopLowstock(){
    let datas = JSON.parse(localStorage.getItem('data'));
    let lowproduct = 30;
    let arr = [];
    for (let data of datas){
        for (let value of data.product){
            if (value.stock < lowproduct){
                arr.push(value);
            }
        }
    }
    
    return arr
}

function loopCreat(){
    document.querySelector('tbody').innerHTML = '';
    let data = loopLowstock();
    if (data.length != 0){
        for (let i = 0 ; i<data.length; i++){
            lowStock(data[i]);
        }
    }else{
        lowStock(data);
    }
}
// loopCreat();

let lowBtn = document.querySelector('.btn2');
lowBtn.addEventListener('click', loopCreat);



// -------------best selling--------------

let hightBtn = document.querySelector('.btn1');
hightBtn.addEventListener('click', ()=>{
    document.querySelector('tbody').innerHTML = '';
});
