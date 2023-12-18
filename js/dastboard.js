function CardProductDisplay() {
    let display_from = document.querySelector('.form-display');
    let table = document.createElement("table");
    let thead = document.createElement('thead');
    let trthead = document.createElement('tr');
    let thItem = document.createElement('th');
    thItem.textContent = 'Item';
    let thName = document.createElement('th');
    thName.textContent = 'Stocks';
    let thPrices = document.createElement('th');
    thPrices.textContent = 'Soulout';
    let thStock = document.createElement('th');
    thStock.textContent = 'Quality';
    let thCategories = document.createElement('th');
    thCategories.textContent = 'Date';
    let thAction = document.createElement('th');
    thAction.textContent = 'Actions';

    let tbody = document.createElement('tbody');
    let trtbody = document.createElement('tr');
    let tdItem = document.createElement('td');
    tdItem.textContent = 'Pizza';
    let tdName = document.createElement('td');
    tdName.textContent = 'Piset';
    let tdPrices = document.createElement('td');
    tdPrices.textContent = '150$';
    let tdStock = document.createElement('td');
    tdStock.textContent = '120';
    let tdCategories = document.createElement('td');
    tdCategories.textContent = 'Foods';
    let tdAction = document.createElement('td');

    let icons = document.createElement('div');
    icons.className='icons';

    let IbxEdit = document.createElement('i');
    IbxEdit.className='bx bx-edit';

    let IbaxTrash = document.createElement('i');
    IbaxTrash.className='bx bx-trash';

    table.appendChild(thead);
    thead.appendChild(trthead);
    trthead.appendChild(thItem);
    trthead.appendChild(thName);
    trthead.appendChild(thPrices);

    table.appendChild(tbody);
    tbody.appendChild(trtbody);
    trtbody.appendChild(tdItem);
    trtbody.appendChild(tdName);
    trtbody.appendChild(tdPrices);

    display_from.appendChild(table);
    console.log(display_from);
}

CardProductDisplay();