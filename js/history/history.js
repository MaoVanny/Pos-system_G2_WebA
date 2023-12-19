

let tbody = document.querySelector('tbody');

function creadHistoryTable(data) {


    let tr = document.createElement('tr');
    let tdItem = document.createElement('td');
    tdItem.textContent = data.name;
    let tdName = document.createElement('td');
    tdName.textContent = data.customer;
    let tdStock = document.createElement('td');
    tdStock.textContent = data.stock;
    let tdPrice = document.createElement('td');
    tdPrice.textContent = data.price + "$";
    let tdCatagorie = document.createElement('td');
    tdCatagorie.textContent = data.customerDate;
    let tdAction = document.createElement('td');
    let icons = document.createElement('div');
    icons.setAttribute('class', 'icons');
    let detailCustomer = document.createElement('i');
    detailCustomer.setAttribute('class', 'bx bx-edit');
    let deleteHistory = document.createElement('i');
    deleteHistory.setAttribute('class', 'bx bx-trash');
    deleteHistory.addEventListener('click', deleteHistoryTr);
    icons.appendChild(detailCustomer);
    icons.appendChild(deleteHistory);
    tdAction.appendChild(icons);


    tr.appendChild(tdItem);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdStock);
    tr.appendChild(tdCatagorie);
    tr.appendChild(tdAction);

    tbody.appendChild(tr);

}


function getListCardValue() {
    tbody.innerHTML = '';
    let datas = JSON.parse(localStorage.getItem('pay'));
    for (let data of datas) {
        creadHistoryTable(data);
    }
}

function deleteHistoryTr(e) {
    if (window.confirm()) {
        let data = JSON.parse(localStorage.getItem('pay'));
        let valueOftb = e.target.parentElement.parentElement.parentElement;
        for (let i = 0; i < data.length; i++) {
            if ((data[i].name === valueOftb.children[0].textContent) && (data[i].customer === valueOftb.children[1].textContent)) {
                data.splice(i, 1);
                localStorage.setItem('pay', JSON.stringify(data));
                window.location.reload();
            }
        }
    }

}



getListCardValue();

