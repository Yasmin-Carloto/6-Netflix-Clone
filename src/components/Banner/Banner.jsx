import PropTypes from "prop-types";
import { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Modal } from "../Modal/Modal";

export function Banner({ currentMovie }) {
    const [open, setOpen] = useState(false)

    function toggleOpen(){
        setOpen(!open)
    }

    return (
        <section 
            className="hidden text-white md:flex flex-col bg-contain w-full h-lvh"
        >
            <div className="w-full h-full flex flex-col items-start justify-center p-8 gap-8">
                <div className="flex flex-col gap-2 w-2/3">
                    <h1 className="text-5xl font-extrabold">{currentMovie.title}</h1>            
                    <p className="w-1/2">{currentMovie.overview}</p>    
                </div>

                <div className="flex items-center gap-4">
                    <button 
                        className="flex items-center justify-center bg-white hover:bg-gray-300 p-2 md:p-2 rounded text-black text-xl md:text-lg gap-2"
                        onClick={() => toggleOpen()}
                    >
                        <IoMdPlay />
                        Assistir
                    </button>
                    <button 
                        className="flex items-center justify-center bg-white/60 hover:bg-white/40 p-2 rounded text-black text-xl md:text-lg gap-2"
                        onClick={() => toggleOpen()}
                    >
                        <IoIosInformationCircleOutline />
                        Mais informações
                    </button>
                </div>
            </div>

            <Modal clickedMovie={currentMovie} isOpen={open} setIsOpen={toggleOpen} />
        </section>
    )
}

Banner.propTypes = {
    currentMovie: PropTypes.object.isRequired,
}