let modal = document.querySelector('#myModal');

let btn = document.querySelector('#btn-01');

let span = document.querySelector('.close');

btn.addEventListener('click', () => {
    modal.style.display = 'block';
});

span.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) modal.style.display = 'none';
});
