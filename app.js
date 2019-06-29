document.getElementById('btn').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);
    
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function () {
        console.log(`Ready state: ${xhr.readyState}`);
        if (this.status === 200) {
            document.getElementById(`output`).innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror = function () {
        console.error('Request error.');
    }
    xhr.send();
}