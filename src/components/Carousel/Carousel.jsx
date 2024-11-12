import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export function Carousel({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(2)

    const itemsLength = items.items.response.length
    const totalSlides = Math.ceil(itemsLength / itemsPerPage)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 600) {
                setItemsPerPage(2)
            } else if (window.innerWidth < 768) {
                setItemsPerPage(3)
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(4)
            } else if (window.innerWidth < 1280) {
                setItemsPerPage(5)
            } else {
                setItemsPerPage(5)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    })

    return (
        <div className="relative w-full overflow-hidden z-10 p-4">
            <h1 className="font-bold text-white text-3xl p-2">{items.title}</h1>
            <div 
                className="flex transition-transform duration-500 ease-out"
                style={{
                    transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                    width: `${totalSlides * 100}%`
                }}
            >
                {items.items.response.map((contentItem, index) => (
                    <div key={contentItem.poster_path || index} className="w-1/5 p-2">
                        <img 
                            src={`https://image.tmdb.org/t/p/original${contentItem.poster_path}`} 
                            className="w-full h-auto object-cover rounded-md" 
                        />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="hover:bg-black/90 duration-500 text-white font-bold h-full w-12 text-xl text-center top-1/2 -translate-y-1/2 absolute left-0 z-30">
                <IoIosArrowBack />
            </button>
            <button onClick={nextSlide} className="hover:bg-black/90 duration-500 text-white font-bold h-full w-12 text-xl text-center top-1/2 -translate-y-1/2 absolute right-0 z-30">
                <IoIosArrowForward />
            </button>
        </div>
    )
}

Carousel.protoTypes = {
    items: PropTypes.array.isRequired,
}