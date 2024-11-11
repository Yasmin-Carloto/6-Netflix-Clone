import axios from "axios";

const baseURL = "https://api.themoviedb.org/3"

export async function getMovies(pageNumber){
    try {
        const response = await axios.get(
            `${baseURL}/movie/popular?language=pt-BR&page=${pageNumber}`,
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_KEY}`
                }
            }
        )
        return {
            status: 200,
            response: response.data.results
        }
    }catch(error){
        return {
            status: 404,
            error: error
        }
    }
}

async function genericFetch(URL) {
    try {
        const response = await axios.get(
            `${baseURL + URL}`, 
            {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_KEY}`
                }
            }
        )
        return {
            status: 200,
            response: response.data.results
        }
    } catch (error) {
        return {
            status: 404,
            error: error
        }
    }
} 

export async function getHomeItems(pageNumber) {
    return [
        {
            heading: 'netflix-originals',
            title: "Só na Netflix",
            items: await genericFetch(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.desc&with_networks=213`),
        },
        {
            heading: "tv-shows",
            title: "Séries para Maratonar",
            items: await genericFetch(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.asc`)
        },
        {
            heading: "child-tv-shows",
            title: "Programas Infantis",
            items: ""
        }, 
        {
            heading: "main-search",
            title: "Principais Buscas",
            items: ""
        }, 
        {
            heading: "terror-movies",
            title: "Filmes de terror",
            items: ""
        },
        {
            heading: "award-winning-films",
            title: "Filmes Premiados",
            items: ""
        }, 
        {
            heading: "drama",
            title: "Drama",
            items: ""
        }, 
        {
            heading: "romance-movies",
            title: "Filmes românticos",
            items: ""
        },
        {
            heading: "comedy",
            title: "Comédia",
            items: "" 
        }
    ]
}