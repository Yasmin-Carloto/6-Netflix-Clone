import PropTypes from "prop-types"
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { searchMultiContent } from "../../api/TMDBApi/fetchMovies";
import { Modal } from "../Modal/Modal";

export function Header({ isLogin, onScroll }){
    const navigationOptions = ["Séries", "Filmes", "Bombando", "Minha lista", "Navegar por idiomas"]
    const [searchInput, setSearchInput] = useState(false)
    const [mouseEntered, setMouseEntered] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [searchContentResponse, setSearchContentResponse] = useState([])
    const [currentContent, setCurrentContent] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const searchRef = useRef(null)

    function toggleOpenModal() {
        setModalOpen(!modalOpen)
    }

    async function onSearchInputChange(event) {
        const { value } = event.target
        if(value.length > 2){
            setSearchValue(value)
            const responseToSearch = await searchMultiContent(searchValue)
            if(responseToSearch.error){
                setSearchContentResponse([])
            }else{
                setSearchContentResponse(responseToSearch.response)
            }
        }else{
            setSearchContentResponse([])
        }
    }

    useEffect(() => {
        if(searchInput && searchRef.current){
            searchRef.current.focus()
        }
    }, [searchInput])

    return (
        <header className={`w-full ${isLogin ? "py-6 bg-black" : "p-4"} ${onScroll ? "bg-zinc-900" : "md:bg-transparent"} fixed ease-in-out duration-500 z-50`}>
            {isLogin ? (
                <div className="w-2/4 md:w-1/6 md:ml-16">
                    <img src="/src/assets/images/logo.png" className="contain"/>
                </div>
            ) : (
                <div className="flex justify-between w-full gap-4">
                    <nav className="w-full text-white md:flex justify-start items-start">
                        <div className="flex justify-start items-center">
                            <IoMdMenu className="text-white md:hidden w-56 text-start" size={48}  />

                            <img 
                                src="/src/assets/images/logo.png" 
                                className="w-48 text-start"
                            />
                        </div>

                        <ul className="hidden md:flex gap-4 justify-center items-center">
                            <li>
                                <a href="#" className="font-bold">Início</a>
                            </li>
                            {navigationOptions.map((option) => (
                                <li key={option}>
                                    <a href="#" className="hover:text-gray-300">{option}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="text-white hidden md:flex items-start gap-4">
                        <div className="flex flex-col items-end justify-center">
                            <div className="flex items-center gap-2">
                                <div className={`items-center bg-zinc-800 p-1 gap-2 border border-white ${searchInput ? "flex" : "hidden"} animate-slideIn`} onBlur={() => setSearchInput(false)}>
                                    <CiSearch size={20} />
                                    <input 
                                        ref={searchRef} 
                                        type="search" 
                                        placeholder="Títulos, gente e gêneros" 
                                        className="w-full bg-zinc-800 outline-none" 
                                        style={{ appearance: "none", WebkitAppearance: "none" }} 
                                        onChange={(event) => onSearchInputChange(event)}
                                    />
                                </div>
                                <CiSearch size={20} onClick={() => setSearchInput(true)} className={`cursor-pointer ${searchInput ? "hidden" : "flex"}`} />
                            </div>

                            {searchContentResponse.length != 0 && (
                                <div className="w-full bg-zinc-900 p-2 my-4 text-gray-300 rounded-md shadow-2xl text-base flex flex-col h-52 overflow-y-auto">
                                    {searchContentResponse.map((content) => (
                                        <div 
                                            className="w-full flex items-center justify-start text-center p-2 gap-2 cursor-pointer border-b border-b-red-700" 
                                            key={content.id}
                                            onClick={() => {
                                                toggleOpenModal()
                                                setCurrentContent(content)
                                                setSearchContentResponse([])
                                            }}
                                        >
                                            <img className="w-24" src={`https://image.tmdb.org/t/p/original${content.poster_path}`} alt="" />
                                            <span className="">{content.name || content.original_title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div>
                            <p className="text-base hover:text-zinc-300 cursor-pointer">Infantil</p>
                        </div>

                        <div>
                            <IoMdNotificationsOutline className="cursor-pointer" size={20} />
                        </div>

                        <div>
                            <Link 
                                to={"/"}
                                className="flex items-center justify-center"
                                onMouseEnter={() => setMouseEntered(true)}
                                onMouseLeave={() => setMouseEntered(false)}
                            >
                                <img src="/src/assets/images/profile-image.jpg" alt="" className="rounded w-10 peer border-transparent border-2 group-hover:border-white" />
                                <MdArrowDropDown className={`${mouseEntered ? "hover:animate-transformUp" : "hover:animate-transformDown"} transition-transform duration-500`} size={28} />
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <input 
                            type="search" 
                            placeholder="Buscar" 
                            className="md:px-2 p-1 w-3/4 text-2xl text-white bg-zinc-800 border border-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded" 
                            style={{ appearance: "none", WebkitAppearance: "none" }}
                            onChange={(event) => onSearchInputChange(event)} 
                        />
                        {searchContentResponse.length != 0 && (
                            <div className="w-full bg-zinc-900 text-gray-300 rounded-md shadow-2xl text-xl flex flex-col h-52 overflow-y-auto items-start">
                                {searchContentResponse.map((content) => (
                                    <div 
                                        className="w-full flex flex-col p-2 gap-2 cursor-pointer border-b border-b-red-700" 
                                        key={content.id}
                                        onClick={() => {
                                            toggleOpenModal()
                                            setCurrentContent(content)
                                        }}
                                    >
                                        <img className="w-24" src={`https://image.tmdb.org/t/p/original${content.poster_path}`} alt={content.name || content.original_title} />
                                        <span className="">{content.name || content.original_title}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {currentContent && (
                        <Modal clickedContent={currentContent} isOpen={modalOpen} setIsOpen={toggleOpenModal} />
                    )}
                </div>
            )}
        </header>
        
    )
}

Header.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    onScroll: PropTypes.bool.isRequired
}