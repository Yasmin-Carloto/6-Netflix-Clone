import { useEffect, useState } from "react";
import { getMovies } from "../../api/TMDBApi/fetchMovies";

export function Banner() {
    const [currentMovie, setCurrentmovie] = useState([])
    useEffect(async () => {
        const pageNumber = Math.floor(Math.random() * (10 - 1 + 1)) + min
        const responseMovies = await getMovies(pageNumber)
        if(responseMovies.error){

        } else {
            
        }
    })
}