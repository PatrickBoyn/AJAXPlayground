document.getElementById('btn-1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);
}