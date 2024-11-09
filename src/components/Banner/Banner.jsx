import PropTypes from "prop-types";
import { IoMdPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

export function Banner({ currentMovie }) {
    return (
        <section 
            className="hidden text-white md:flex flex-col bg-contain w-full h-lvh"
        >
            <div className="w-full h-full flex flex-col items-start justify-center p-8 gap-2">
                <div className="flex flex-col gap-2 w-2/3">
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

Banner.propTypes = {
    currentMovie: PropTypes.object.isRequired,
}