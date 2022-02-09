const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2b1bb8a253333a1c364df2d5281eaaf6&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=2b1bb8a253333a1c364df2d5281eaaf6&query="';

const form = document.querySelector('#form');
const search = document.querySelector('#search');
const main = document.querySelector('#main');

// Get initial moviegs
getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
   
    showMovies(data.results);
}

function showMovies(movies){
    main.innerHTML = '';
    
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie; 
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${getImageUrl(poster_path)}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                ${overview}
            </div>
        `;
        
        main.appendChild(movieEl);
    });
    
}

function getImageUrl(imageName){
    if(imageName){
        return IMG_PATH+imageName;
    } else{
        return 'film.jpg';
    }
}

function getClassByRate(vote){
    if(vote >=8){
        return 'green';
    } else if(vote >=5){
        return 'orange';
    } else{
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
   e.preventDefault();
   
   const searchTerm = search.value;
   
   if(searchTerm && searchTerm !== ''){
       getMovies(SEARCH_API+searchTerm);
       
       search.value = '';
   } else {
       window.location.reload();
   }
});