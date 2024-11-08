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

export async function getHomeItems() {

}