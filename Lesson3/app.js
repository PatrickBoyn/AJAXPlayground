document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open(`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            
        }
    }

    xhr.send();

    e.preventDefault();
}