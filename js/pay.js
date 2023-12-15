// pay.js

document.addEventListener("DOMContentLoaded", function () {
    const cancelButton = document.querySelector(".button button:first-child");
    const payButton = document.querySelector(".button button:last-child");
    const nameInput = document.querySelector('input[placeholder="name"]');
    const phoneNumberInput = document.querySelector('input[placeholder="phone number"]');
    const dateInput = document.querySelector('input[placeholder="mm/dd/yyyy"]');
    const amountInput = document.querySelector('input[placeholder="amount"]');


    cancelButton.addEventListener("click", function () {
        console.log("Cancel button clicked");
    });
    payarr = []
    payButton.addEventListener("click", function () {
        payObject = {};
        console.log("Pay button clicked");
        const name = nameInput.value;
        const phoneNumber = phoneNumberInput.value;
        const date = dateInput.value;
        const amount = amountInput.value;
        payObject.name = name;
        payObject.phoneNumbe = phoneNumber;
        payObject.date = date;
        payObject.amount = amount;
        console.log(payObject)
    });
});





let paymentCard = document.querySelector('.paymentCard');
paymentCard.style.display='none'
console.log(paymentCard)
function payMent() {

    if (btnPay) {
        paymentCard.style.display = 'block';
    }
}


let btnPay = document.querySelector('.pay');
btnPay.addEventListener("click", payMent);

function cancel(){
   if (button1){
    paymentCard.style.display='none'

   }
}
let button1 = document.querySelector('.button1');
button1.addEventListener('click',cancel)