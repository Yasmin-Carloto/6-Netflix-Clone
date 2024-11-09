import { useState, useEffect } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";
import { getMovies } from "../../api/TMDBApi/fetchMovies";
import { Loading } from "../../components/Loading/Loading";

export function Home() {
    const [navOnScroll, setNavOnScroll] = useState(false)
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
    function changeNavOnScroll() {
        setNavOnScroll(!navOnScroll)
        console.log(navOnScroll)
    }

    if(!currentMovie){
        return <Loading />
    }

    const posterUrl = currentMovie.poster_path 
        ? `https://image.tmdb.org/t/p/original${currentMovie.poster_path}` 
        : null;

    return (
        <div className="">
            <div 
                className="bg-contain"     
                style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : 'none',}}
            >
                <div className="bg-gradient-to-r from-black/100 to-transparent" onScroll={changeNavOnScroll}>
                    <Header isLogin={false} />
                    <Banner currentMovie={currentMovie} onScroll={navOnScroll} />
                </div>
            </div>

            <h1 className="h-screen">teste</h1>
        </div>
    )
}