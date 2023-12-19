// pay.js


let paymentCard = document.querySelector('.paymentCard');


let btnPay = document.querySelector('.pay');
btnPay.addEventListener("click", payMent);

function payMent() {
    paymentCard.style.display = 'block';
    let customerInput = document.querySelectorAll('.input input');
    const payMoney = document.querySelector('.button2');
    payMoney.addEventListener('click', () => {
        let totalPrices = document.querySelectorAll('.total-product p');
        let totalPrice = (totalPrices[1].children[0].textContent).slice(0, -1);
        if ((customerInput[0].value != '') && (customerInput[2].value != '') && (customerInput[3].value >= parseInt(totalPrice))) {
            let allCardlist = document.querySelectorAll('.card-add');
            let data = JSON.parse(localStorage.getItem('pay'));
            let dataDash = JSON.parse(localStorage.getItem('totalDash'));
            dataDash.price += parseInt(customerInput[3].value);
            for (let val of allCardlist) {
                let obj = {};
                dataDash.itemSold += parseInt(val.children[1].children[1].textContent);
                obj.customer = customerInput[0].value;
                obj.customerDate = customerInput[2].value;
                obj.customerPrice = customerInput[3].value;
                obj.name = val.children[0].textContent;
                obj.stock = parseInt(val.children[1].children[1].textContent);
                obj.price = (val.children[2].children[0].textContent).slice(0, -1);
                data.push(obj);
                removeStock(obj);
                localStorage.setItem('pay', JSON.stringify(data));
            }
          
            let cardList = JSON.parse(localStorage.getItem('add'));
            cardList = [];
            localStorage.setItem('totalDash', JSON.stringify(dataDash));
            localStorage.setItem('add', JSON.stringify(cardList));
            paymentCard.style.display = 'none';
        }

        getDataStoragetoDp();

    })
}

function cancelPay() {
    paymentCard.style.display = 'none';
}


function removeStock(obj){
    let dataProduct = JSON.parse(localStorage.getItem('data'));
    for (let data of dataProduct){
        let data1 = data.product;
        for (let i=0; i <data1.length; i++){
            if (data1[i].name === obj.name){
                data1[i].stock -= obj.stock;
            }
        }
    }
    console.log(dataProduct);
    localStorage.setItem('data', JSON.stringify(dataProduct));
    window.location.reload();
}
let button1 = document.querySelector('.button1');
button1.addEventListener('click', cancelPay)

