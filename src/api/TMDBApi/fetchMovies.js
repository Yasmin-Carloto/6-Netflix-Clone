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
            title: "Só na Netflix",
            items: await genericFetch(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.desc&with_networks=213`),
        },
        {
            title: "Séries para Maratonar",
            items: await genericFetch(`/trending/tv/day?language=pt-BR`)
        },
        {
            title: "Programas Infantis",
            items: await genericFetch(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.desc&with_genres=10762`)
        }, 
        {
            title: "Principais Buscas",
            items: await genericFetch("/trending/all/day?language=pt-BR")
        }, 
        {
            title: "Filmes de terror",
            items: await genericFetch(`/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.desc&with_genres=27`)
        },
        {
            title: "Filmes de ação",
            items: await genericFetch(`/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.desc&with_genres=28`)
        }, 
        {
            title: "Para toda a família",
            items:  await genericFetch(`/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=${pageNumber}&sort_by=popularity.desc&with_genres=10751`)
        },
        {
            title: "Comédia",
            items: await genericFetch(`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc&with_genres=35`)
        }
    ]
}