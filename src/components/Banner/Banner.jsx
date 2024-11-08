import { useEffect, useState } from "react";
import { getMovies } from "../../api/TMDBApi/fetchMovies";
import { Loading } from "../Loading/Loading";
import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

export function Banner() {
    const [currentMovie, setCurrentmovie] = useState()
    useEffect(() => {
        async function fetchMovie() {
            const pageNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1
            const responseMovies = await getMovies(pageNumber)
            
            if(responseMovies.error){
                setCurrentmovie()
            } else {
                const choosenMovie = Math.floor(Math.random() * (10 - 1 + 1)) + 1
                setCurrentmovie(responseMovies.response[choosenMovie])
            }
        }

        fetchMovie()
    }, [])

    if(!currentMovie){
        return <Loading />
    }
    
    const posterUrl = currentMovie.poster_path 
        ? `https://image.tmdb.org/t/p/original${currentMovie.poster_path}` 
        : null;


    return (
        <section 
            className="hidden text-white md:flex flex-col bg-no-repeat bg-cover w-full h-full"
            style={{ 
                backgroundImage: posterUrl ? `url(${posterUrl})` : 'none',
            }}
        >
            <div className="w-full h-full bg-gradient-to-r from-black/100 to-transparent flex flex-col items-start justify-around p-6 gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl font-extrabold">{currentMovie.title}</h1>            
                    <p className="w-1/2">{currentMovie.overview}</p>    
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center bg-white p-2 rounded text-black text-xl gap-2">
                        <IoMdPlay />
                        Assistir
                    </button>
                    <button className="flex items-center justify-center bg-white/60 p-2 rounded text-black text-xl gap-2">
                        <IoIosInformationCircleOutline />
                        Mais informações
                    </button>
            </div>
            </div>
        </section>
    )
}