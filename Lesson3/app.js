document.querySelector('.get-jokes').addEventListener('click', getJokes);


function getJokes(e) {
    console.log('get jokes!');
    const number = document.querySelector('input[type="number"]');
    
    e.preventDefault();
}