
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
                loginToFromProduct()
    });
}

let loginForm = document.querySelector('.login');
let container1 = document.querySelector('.container1');
container1.style.display = 'none';

let loginPasswords = [
    { name: 'dara', pw: '123', cf: '123' }
];

function loginToFromProduct() {
    let inputName = document.querySelector('.name');
    let inputPassword = document.querySelector('.password');
    let inputConfirmPassword = document.querySelector('.confirmPassword');
    let isLoggedIn = false;
    for (let login of loginPasswords) {
        if (inputName.value === login.name && inputPassword.value === login.pw && inputConfirmPassword.value === login.cf) {
            isLoggedIn = true;
        }
    }

    if (isLoggedIn) {
        container1.style.display = 'block';
        loginForm.style.display = 'none';

    } else {
        alert('Incorrect, please try again!');
    }
}
CardLogin();
