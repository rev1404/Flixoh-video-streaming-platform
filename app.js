// Handle Dark Mode Toggle
const toggle = document.querySelector('.toggle');
const toggleBall = document.querySelector('.toggle-ball');
const body = document.body;

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    body.classList.toggle('dark-mode');
});

// Handle Navigation
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Highlight active menu item
        menuItems.forEach(menu => menu.classList.remove('active'));
        item.classList.add('active');

        // Show corresponding section
        const target = item.getAttribute('data-section');
        sections.forEach(section => {
            if (section.id === target) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    });
});

// Handle Video Modal
const watchButtons = document.querySelectorAll('.watch-btn');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.getElementById('closeModal');

watchButtons.forEach(button => {
    button.addEventListener('click', () => {
        const videoSrc = button.getAttribute('data-video');
        modalVideo.src = videoSrc;
        videoModal.classList.add('active');
        modalVideo.play();
    });
});

closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    modalVideo.pause();
    modalVideo.src = ""; // Clear video source
});

window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        modalVideo.pause();
        modalVideo.src = ""; // Clear video source
    }
});

// Handle Search
const searchBar = document.getElementById('searchBar');
const movieList = document.getElementById('movieList');

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const movies = movieList.getElementsByClassName('movie-card');

    Array.from(movies).forEach(movie => {
        const title = movie.querySelector('.movie-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
});

// Handle Favourites
const favouritesList = document.getElementById('favouritesList');
const favouriteButtons = document.querySelectorAll('.favourite-btn');

favouriteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const movieCard = button.closest('.movie-card');
        const title = movieCard.querySelector('.movie-title').textContent;
        const imgSrc = movieCard.querySelector('.movie-img').src;
        const description = movieCard.querySelector('.movie-desc').textContent;

        const favouriteMovie = document.createElement('div');
        favouriteMovie.classList.add('movie-card');
        favouriteMovie.innerHTML = `
            <img src="${imgSrc}" alt="${title}" class="movie-img">
            <h2 class="movie-title">${title}</h2>
            <p class="movie-desc">${description}</p>
        `;
        favouritesList.appendChild(favouriteMovie);

        // Show favourite section if it's empty
        if (favouritesList.children.length > 0) {
            document.querySelector('#favourites .empty-msg').style.display = 'none';
        }
    });
});
