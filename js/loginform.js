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
                storeDataLogin();
    });
}

let loginForm = document.querySelector('.login');
let container1 = document.querySelector('.container1');
container1.style.display = 'none';

function storeDataLogin(){
    let inputName = document.querySelector('.name');
    let inputPassword = document.querySelector('.password');
    let inputConfirmPassword = document.querySelector('.confirmPassword');
    let locData = JSON.parse(localStorage.getItem('pwd'));
    let obj = {};
    obj.name = inputName.value;
    obj.pwd = inputPassword.value;
    obj.cpwd = inputConfirmPassword.value;
    locData.push(obj);
    localStorage.setItem('pwd', JSON.stringify(locData));
    loginToFromProduct();

}

function loginToFromProduct() {
    let data = JSON.parse(localStorage.getItem('pwd'));
    let isLoggedIn = false;
    if (data.length != 0){
        isLoggedIn = true;
    }

    if (isLoggedIn) {
        container1.style.display = 'block';
        loginForm.style.display = 'none';

    } else {
        container1.style.display = 'none'
        
    }
}
CardLogin();
loginToFromProduct();
