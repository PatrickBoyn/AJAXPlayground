document.getElementById('btn-1').addEventListener('click', loadCustomer);
document.getElementById('btn-2').addEventListener('click', loadCustomers);


function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);
    
    xhr.onload = function () {
        if (this.status === 200) {

            // Turns the JSON into a JavaScript Object.
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                  <li>ID: ${customer.id}</li>
                  <li>Name: ${customer.name}</li>
                  <li>Company: ${customer.company}</li>
                  <li>Phone Number: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();
}

function loadCustmoers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }
}