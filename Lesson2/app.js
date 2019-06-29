document.getElementById('btn-1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);
    
    xhr.onload = function () {
        if (this.status === 200) {
            
            // Turns the JSON into a JavaScript Object.
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                  <li>ID: ${user.id}</li>
                  <li>Name: ${user.name}</li>
                  <li>Company: ${user.company}</li>
                  <li>Phone Number: ${user.phone}</li>
                </ul>
            `;
        }
    }

    xhr.send();
}