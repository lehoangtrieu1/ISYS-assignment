// Dark mode toggle functionality
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Project gallery modal functionality
const projectImages = document.querySelectorAll('.project img');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close-modal');

projectImages.forEach(image => {
    image.addEventListener('click', () => {
        const projectTitle = image.nextElementSibling.textContent;
        const projectDescription = image.nextElementSibling.nextElementSibling.textContent;

        modalContent.innerHTML = `
            <span class="close-modal">&times;</span>
            <img src="${image.src}" alt="${projectTitle}">
            <h2>${projectTitle}</h2>
            <p>${projectDescription}</p>
        `;
        
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

