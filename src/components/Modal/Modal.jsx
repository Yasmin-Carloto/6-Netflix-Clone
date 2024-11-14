import PropTypes from "prop-types"

export function Modal({ setIsOpen, isOpen, clickedContent }) {
    return (
        <div className={`${isOpen ? "flex" : "hidden"} fixed inset-0 items-center justify-center bg-black/80 z-50`}>
            <div className="bg-zinc-600 rounded-xl shadow-lg p-4 w-full m-2 md:w-1/2">
                <div className="flex flex-col md:flex-row justify-center items-start gap-2">
                    <div className="">
                        <img className="w-36 md:max-w-7xl rounded-2xl" src={`https://image.tmdb.org/t/p/original${clickedContent.poster_path}`} alt={clickedContent.name || clickedContent.original_title} />
                    </div>

                    <div className="text-gray-200">
                        <div>
                            <h1 className="font-bold text-3xl md:text-4xl">{clickedContent.name || clickedContent.original_title}</h1>
                            <div className="text-sm leading-5 text-justify h-24 overflow-y-auto md:overflow-hidden md:h-full">
                                <p>{clickedContent.overview}</p>
                            </div>
                        </div>
                        <div className="my-4">
                            <p className="font-semibold text-lg">Popularidade de acordo com o TMDB</p>
                            <span className="text-lg font-medium text-yellow-500">{clickedContent.popularity}</span>
                        </div>
                    </div>
                </div>
                <button onClick={() => setIsOpen()} className="text-center w-full p-2 bg-red-700 font-medium text-white rounded-lg md:mt-4">Fechar</button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    clickedContent: PropTypes.object.isRequired
}