// pay.js


let paymentCard = document.querySelector('.paymentCard');


let btnPay = document.querySelector('.pay');
btnPay.addEventListener("click", payMent);

function payMent(){
    paymentCard.style.display = 'block';
}

function cancelPay(){
    paymentCard.style.display = 'none';
}
let button1 = document.querySelector('.button1');
button1.addEventListener('click',cancelPay)

