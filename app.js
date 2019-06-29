document.getElementById('btn').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);
}