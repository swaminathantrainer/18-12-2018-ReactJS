export const API_KEY = "c534cca507bc56c9d2622bd0be9fadff";
export const DOMAIN = "api.themoviedb.org";
export const SCHEMA = "https";
export const VERSION = "3";

export const getTrendingData = (mediaType, timeWindow, page = 1) => {
    const api = `${SCHEMA}://${DOMAIN}/${VERSION}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&page=${page}`;

    // const fetchPromise = fetch(api);
    // const responsePromise = fetchPromise.then((response) => {
    //     return response.json();
    // });

    // return responsePromise;

    // return fetch(api).then((response) => {
    //     return response.json();
    // });

    return fetch(api).then((response) => response.json());
};

export const getUpcomingMovies = (region) => {
    const api = `${SCHEMA}://${DOMAIN}/${VERSION}/movie/upcoming?api_key=${API_KEY}&region=${region}`;
    return fetch(api).then(response => response.json());
}

export const imageAPI = (imagePath, width) => {
    return `${SCHEMA}://image.tmdb.org/t/p/w${width}${imagePath}`
}

export const movieAPI = (id) => {
    const api = `${SCHEMA}://${DOMAIN}/${VERSION}/movie/${id}?api_key=${API_KEY}`;
    return fetch(api).then(response => response.json());
}