
function CardLogin() {
    let cardlogin = document.createElement('div');
    cardlogin.className = 'card-login';

    let img = document.createElement('img');
    img.className = 'img';
    img.src = 'image/profile.png';

    let loginInput = document.createElement('div');
    loginInput.className = 'loginInput';

    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.className = 'name';
    inputName.id = 'Name';
    inputName.placeholder = 'Enter Your Name';

    let inputPassword = document.createElement('input');
    inputPassword.type = 'text';
    inputPassword.className = 'password';
    inputPassword.id = 'password';
    inputPassword.placeholder = 'Password';

    let inputConfirm = document.createElement('input');
    inputConfirm.type = 'text';
    inputConfirm.className = 'confirmPassword';
    inputConfirm.id = 'confirmPassword';
    inputConfirm.placeholder = 'Confirm Password';

    let divBtn = document.createElement('div');
    divBtn.className = 'btn';

    let button = document.createElement('button');
    button.id = 'button';
    button.textContent = 'Done';

    cardlogin.appendChild(img);
    loginInput.appendChild(inputName);
    loginInput.appendChild(inputPassword);
    loginInput.appendChild(inputConfirm);
    divBtn.appendChild(button);
    cardlogin.appendChild(loginInput);
    cardlogin.appendChild(divBtn);
    loginForm.appendChild(cardlogin);

    button.addEventListener('click', function () {
        addValueOfForm();
    });
}

let loginForm = document.querySelector('.login');
let container1 = document.querySelector('.container1');



function addValueOfForm() {
    let data = JSON.parse(localStorage.getItem('formvalue'));
    let inputName = document.querySelector('.name');
    let inputPassword = document.querySelector('.password');
    let inputConfirmPassword = document.querySelector('.confirmPassword');
    if (parseInt(inputPassword.value) === parseInt(inputConfirmPassword.value)) {
        data.push(inputPassword.value);
        data.push(inputConfirmPassword.value);
        data.push(inputName.value);
    } else {
        alert('Incorrect, please try again!');
    }
    inputName.value = '';
    inputPassword.value = '';
    inputConfirmPassword.value = '';
    localStorage.setItem('formvalue', JSON.stringify(data));
    loginToFromProduct();
}

function loginToFromProduct() {

    let valueOfinput = JSON.parse(localStorage.getItem('formvalue'));
    if (valueOfinput.length != 0) {
        container1.style.display = 'block';
        loginForm.setAttribute('class', 'hide');
    }
}


// closest application---------------------------
let closeBtn = document.querySelector('.bx-power-off');
closeBtn.addEventListener('click', () => {
    if (window.confirm('Do you want to left you account?')) {
        let data = JSON.parse(localStorage.getItem('formvalue'));
        data = [];
        container1.style.display = 'none';
        loginForm.setAttribute('class', 'login');
        localStorage.setItem('formvalue', JSON.stringify(data));
    }

})

loginToFromProduct();

CardLogin();