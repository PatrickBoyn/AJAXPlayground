document.getElementById('btn').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);
    
    console.log(`Ready state: ${xhr.readyState}`);

    xhr.onload = function () {
        console.log(`Ready state: ${xhr.readyState}`);
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }
    xhr.send();
}