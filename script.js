// Game data organized by category
const games = {
    geography: [
        {
            id: 1,
            title: "TimeGuessr",
            description: "Guess the year a historical photo was taken in this challenging time-based geography game.",
            image: "imagesGames/timeguessr.jpg",
            category: "geography",
            url: "https://timeguessr.com/"
        },
        {
            id: 2,
            title: "FlagPath",
            description: "Connect countries by their flags in this creative geography puzzle game.",
            image: "imagesGames/flagpath.png",
            category: "geography",
            url: "https://www.flagpath.xyz/"
        },
        {
            id: 3,
            title: "Flagle",
            description: "Guess the country by its flag in this daily flag guessing challenge.",
            image: "imagesGames/flagle.png",
            category: "geography",
            url: "https://flagle-game.com/"
        },
        {
            id: 4,
            title: "Globle",
            description: "Guess the mystery country each day with clues getting hotter or colder.",
            image: "imagesGames/globle.png",
            category: "geography",
            url: "https://globle-game.com/game"
        },
        {
            id: 5,
            title: "GeoGuessr Free",
            description: "The classic geography game where you guess your location based on Street View images.",
            image: "imagesGames/geoguessr.png",
            category: "geography",
            url: "https://www.geoguessr.com/"
        },
        {
            id: 6,
            title: "GeoGrid",
            description: "A geography puzzle game where you place countries correctly on a world map.",
            image: "imagesGames/geogrid.webp",
            category: "geography",
            url: "https://www.geogridgame.com/"
        },
                {
            id: 28,
            title: "Travle",
            description: "Guess the corret path between two countries",
            image: "imagesGames/travle.png",
            category: "geography",
            url: "https://travle.earth/"
        },

    ],
    general: [
        {
            id: 7,
            title: "Wordle",
            description: "The popular daily word guessing game where you have six tries to guess a five-letter word.",
            image: "imagesGames/wordle.webp",
            category: "general",
            url: "https://www.nytimes.com/games/wordle/index.html"
        },
        {
            id: 21,
            title: "Connections",
            description: "A word association game where you connect words to form groups of four.",
            image: "imagesGames/connections.webp",
            category: "general",
            url: "https://www.nytimes.com/games/connections"
        },
        {
            id: 8,
            title: "Gamedle",
            description: "Guess the video game from blurred screenshots that become clearer with each guess.",
            image: "imagesGames/gamedle.webp",
            category: "general",
            url: "https://www.gamedle.wtf/"
        },
        {
            id: 11,
            title: "Scrandle",
            description: "Guess which scran is superior",
            image: "imagesGames/scrandle.jpg",
            category: "general",
            url: "https://scrandle.com/"
        },
        {
            id: 12,
            title: "Higher or Lower : All Edition",
            description: "Guess if the next item is higher or lower in popularity based on Google search data",
            image: "imagesGames/higherorlower.png",
            category: "general",
            url: "https://www.higherorlowergame.com/"
        },
        {
            id: 18,
            title: "FoodGuessr",
            description: "Guess the origin of the food from the image and the ingredients.",
            image: "imagesGames/foodguessr.png",
            category: "general",
            url: "https://www.foodguessr.com/"
        },
        {
            id: 16,
            title: "Guess the age",
            description: "Guess the age of the person in the image",
            image: "imagesGames/ageguessr.jpg",
            category: "general",
            url: "https://guesstheage.org/play"
        },
        {
            id: 27,
            title: "Auction Game",
            description: "Guess the price of the art item from the image.",
            image: "imagesGames/auctiongame.png",
            category: "general",
            url: "https://neal.fun/auction-game/"
        },
        {
            id: 19,
            title: "Bandle (careful copyright)",
            description: "Guess the band's song from the instrumental music.",
            image: "imagesGames/bandle.png",
            category: "general",
            url: "https://bandle.app/"
        },
        {
            id: 22,
            title: "Tradle",
            description: "Guess the country from the trade data.",
            image: "imagesGames/tradle.webp",
            category: "general",
            url: "https://tradle.net/"
        },
        {
            id: 23,
            title: "Catfishing",
            description: "Guess the Wikipedia article from its categories.",
            image: "imagesGames/catfishing.png",
            category: "general",
            url: "https://catfishing.net/"
        },
        {
            id: 25,
            title: "Housle",
            description: "Guess the price of the house from the image.",
            image: "imagesGames/housle.png",
            category: "general",
            url: "https://guessthe.house/"
        },
        {
            id: 26,
            title: "Moviedle",
            description: "Guess the movie from the super speed version of the film.",
            image: "imagesGames/moviedle.jpg",
            category: "general",
            url: "https://likewise.com/games/moviedle"
        },
        {
            id: 26,
            title: "Framed",
            description: "Guess the movie from the frame.",
            image: "imagesGames/framed.png",
            category: "general",
            url: "https://framed.wtf/"
        },
        {
            id: 17,
            title: "Rankdle",
            description: "Guess the rank from the video.",
            image: "imagesGames/rankdle.jpg",
            category: "general",
            url: "https://rankdle.com/games/valorant-guess-the-rank"
        },
        {
            id: 15,
            title: "Quordle",
            description: "Guess four words at once in this challenging word guessing game.",
            image: "imagesGames/quordle.png",
            category: "general",
            url: "https://quordly.com/"
        },

    ],
    pokemon: [
        {
            id: 9,
            title: "Pokedle",
            description: "Guess the Pokémon from its silhouette in this daily Pokémon guessing game.",
            image: "imagesGames/pokedle.webp",
            category: "pokemon",
            url: "https://pokedle.net/"
        },
        {
            id: 10,
            title: "Pokedoku",
            description: "A Pokémon-themed grid game combining elements of Sudoku and trivia.",
            image: "imagesGames/pokedoku.png",
            category: "pokemon",
            url: "https://pokedoku.com/"
        }
    ],
    math : [
        {
            id: 20,
            title: "Nerdle",
            description: "A math-based word game where you guess the equation instead of a word.",
            image: "imagesGames/nerdle.png",
            category: "math",
            url: "https://nerdlegame.com/"
        },
        {
            id: 14,
            title: "Angle",
            description: "Guess the angle of the line in this daily angle guessing game.",
            image: "imagesGames/angle.svg",
            category: "math",
            url: "https://angle.wtf/"
        },
        {
            id: 13,
            title: "Higher or Lower: original Edition",
            description: "Guess if the next item is higher or lower in popularity based on Google search data",
            image: "imagesGames/higherorloweroriginal.png",
            category: "general",
            url: "https://www.higherlowergame.com/"
        },
        {
            id: 24,
            title: "Matiks",
            description: "A math game where you solve equations to progress through levels.",
            image: "imagesGames/matiks.png",
            category: "math",
            url: "https://www.matiks.in/"
        },

    ]
};

// DOM Elements
const favoritesGrid = document.getElementById('favorites-grid');
const geographyGrid = document.getElementById('geography-grid');
const generalGrid = document.getElementById('general-grid');
const pokemonGrid = document.getElementById('pokemon-grid');
const mathGrid = document.getElementById('math-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const navLinks = document.querySelectorAll('nav ul li a');
const themeToggle = document.getElementById('theme-toggle');

// Theme functionality
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDark ? 'dark' : 'light');
    }
}

// Display games function
function displayGames(gamesArray, container) {
    container.innerHTML = '';
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    gamesArray.forEach(game => {
        const gameCardWrapper = document.createElement('div');
        gameCardWrapper.className = 'game-card-wrapper';
        
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.setAttribute('data-category', game.category);
        gameCard.setAttribute('data-title', game.title.toLowerCase());
        
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="game-card-img">
            <div class="game-card-content">
                <h3 class="game-card-title">${game.title}</h3>
                <p class="game-card-description">${game.description}</p>
                <div class="game-card-footer">
                    <span class="game-card-category">${game.category}</span>
                    <button class="game-card-btn" data-url="${game.url}">Play Now</button>
                </div>
            </div>
        `;
        
        const favoriteStar = document.createElement('button');
        favoriteStar.className = `game-card-star ${favorites.includes(game.id) ? 'favorited' : ''}`;
        favoriteStar.innerHTML = '☆'; // Star icon
        favoriteStar.dataset.gameId = game.id;
        favoriteStar.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(game.id);
        });
        
        gameCardWrapper.appendChild(favoriteStar);
        gameCardWrapper.appendChild(gameCard);
        container.appendChild(gameCardWrapper);
    });
    
    // Add event listeners to all play buttons
    document.querySelectorAll('.game-card-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(button.dataset.url, '_blank');
        });
    });
    
    // Add event listeners to game cards
    document.querySelectorAll('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            const url = card.querySelector('.game-card-btn').dataset.url;
            window.open(url, '_blank');
        });
    });
}

// Search games across all categories
function searchGames(query) {
    if (!query.trim()) {
        // If search is empty, show all games
        init();
        return;
    }
    
    const searchTerm = query.toLowerCase();
    const results = [];
    
    // Search through all categories
    for (const category in games) {
        games[category].forEach(game => {
            if (game.title.toLowerCase().includes(searchTerm) || 
                game.description.toLowerCase().includes(searchTerm)) {
                results.push(game);
            }
        });
    }
    
    // Clear all grids
    geographyGrid.innerHTML = '';
    generalGrid.innerHTML = '';
    pokemonGrid.innerHTML = '';
    mathGrid.innerHTML = '';
    favoritesGrid.innerHTML = '';
    
    // Display results in a temporary container
    if (results.length > 0) {
        const searchResultsSection = document.createElement('div');
        searchResultsSection.className = 'game-section';
        searchResultsSection.innerHTML = `
            <div class="container">
                <h2 class="section-title">Search Results</h2>
                <div class="games-grid" id="search-results-grid"></div>
            </div>
        `;
        
        // Insert after hero section
        document.querySelector('main').insertBefore(searchResultsSection, document.querySelector('.game-section'));
        
        // Display results
        displayGames(results, document.getElementById('search-results-grid'));
    } else {
        const noResults = document.createElement('div');
        noResults.className = 'game-section';
        noResults.innerHTML = `
            <div class="container">
                <h2 class="section-title">No Results Found</h2>
                <p class="section-description">Try a different search term</p>
            </div>
        `;
        document.querySelector('main').insertBefore(noResults, document.querySelector('.game-section'));
    }
}

// Initialize the page
function init() {
    // Remove any search results sections
    const existingSearchResults = document.querySelectorAll('.game-section');
    if (existingSearchResults.length > 5) { 
        existingSearchResults[5].remove();
    }
    
    // Display games in their respective sections
    displayGames(games.geography, geographyGrid);
    displayGames(games.general, generalGrid);
    displayGames(games.pokemon, pokemonGrid);
    displayGames(games.math, mathGrid);
    displayFavorites();
    
    // Set active nav link based on scroll position
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('.game-section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Run the initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    init();
});

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

searchBtn.addEventListener('click', () => {
    searchGames(searchInput.value);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchGames(searchInput.value);
    }
});

// Smooth scrolling for navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update active class
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

function toggleFavorite(gameId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(gameId);
    
    if (index === -1) {
        favorites.push(gameId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteStars();
    displayFavorites();
}

function updateFavoriteStars() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    document.querySelectorAll('.game-card-star').forEach(star => {
        const gameId = parseInt(star.dataset.gameId);
        const isFavorited = favorites.includes(gameId);
        star.classList.toggle('favorited', isFavorited);
        star.innerHTML = isFavorited ? '★' : '☆'; 
    });
}

function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteGames = [];
    
    // Find all games that are favorited
    for (const category in games) {
        games[category].forEach(game => {
            if (favorites.includes(game.id)) {
                favoriteGames.push(game);
            }
        });
    }
    
    // Display them in the favorites grid
    displayGames(favoriteGames, favoritesGrid);
}