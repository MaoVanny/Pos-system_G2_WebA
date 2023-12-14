const cancel = document.querySelector('.group-btn-pay .cancel');
cancel.addEventListener('click', ()=>{
    let data = JSON.parse(localStorage.getItem('add'));
    if (window.confirm('Do you want to delete all card?')){
        data = [];
    }
    localStorage.setItem('add', JSON.stringify(data));
    getDataStoragetoDp();
})