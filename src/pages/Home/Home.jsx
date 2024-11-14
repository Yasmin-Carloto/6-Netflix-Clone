import { useState, useEffect } from "react";
import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";
import { getHomeItems, getMovies } from "../../api/TMDBApi/fetchMovies";
import { Loading } from "../../components/Loading/Loading";
import { Carousel } from "../../components/Carousel/Carousel";
import { Footer } from "../../components/Footer/Footer";

export function Home() {
    const [navOnScroll, setNavOnScroll] = useState(false)
    const [currentMovie, setCurrentmovie] = useState()
    const [homeLists, setHomeList] = useState([])

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

        async function getHomeMoviesList() {
            const pageNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1
            const responseMovies = await getHomeItems(pageNumber)

            if(responseMovies[0].items.length == 0){
                setHomeList([])
            }else{
                setHomeList(responseMovies)
            }
        }

        getHomeMoviesList()

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
    }

    if(!currentMovie){
        return <Loading />
    }

    const posterUrl = currentMovie.poster_path 
        ? `https://image.tmdb.org/t/p/original${currentMovie.poster_path}` 
        : null;

        console.log(process.env.VITE_APP_TMDB_API_KEY)

    return (
        <div className="bg-zinc-900 relative z-40" onScrollCapture={() => changeNavOnScroll()}>
            <div 
                className="bg-contain"     
                style={{ backgroundImage: posterUrl ? `url(${posterUrl})` : 'none',}}
            >
                <div className="md:bg-gradient-to-r from-black/100 to-transparent">
                    <Header isLogin={false} onScroll={navOnScroll} />
                    <Banner currentMovie={currentMovie} onScroll={navOnScroll} />
                </div>
            </div>
            <div className="pt-16 md:pt-0">
                {homeLists.map((list) => (
                    <Carousel key={list.title} items={list} />
                ))}
            </div>
            <Footer isLogin={false} />
        </div>
    )
}