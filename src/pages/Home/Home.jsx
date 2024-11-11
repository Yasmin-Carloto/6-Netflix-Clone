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

        function handleScroll() {
            if(window.scrollY > 50){
                setNavOnScroll(true)
            }else{
                setNavOnScroll(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
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
        <div className="bg-zinc-900" onScrollCapture={() => changeNavOnScroll()}>
            <div 
                className="bg-contain"     
                style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : 'none',}}
            >
                <div className="bg-gradient-to-r from-black/100 to-transparent">
                    <Header isLogin={false} onScroll={navOnScroll} />
                    <Banner currentMovie={currentMovie} onScroll={navOnScroll} />
                </div>
            </div>

        </div>
    )
}