// Get the button that opens the modal
let iconPlay = document.querySelector('.iconPlay');

let modal = document.querySelector('.modal');

let iconClose = document.querySelector('.iconClose');

// When the user clicks the button, open the modal
iconPlay.addEventListener('click', () => {
    modal.style.display = 'block';
});

iconClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) modal.style.display = 'none';
});
