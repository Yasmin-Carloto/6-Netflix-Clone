import PropTypes from "prop-types"
import { IoMdMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function Header({ isLogin }){
    const navigationOptions = ["Séries", "Filmes", "Bombando", "Minha lista", "Navegar por idiomas"]
    const [searchInput, setSearchInput] = useState(false)
    const [mouseEntered, setMouseEntered] = useState(false)
    const searchRef = useRef(null)

    useEffect(() => {
        if(searchInput && searchRef.current){
            searchRef.current.focus()
        }
    }, [searchInput])

    return (
        <header className={`w-full bg-none ${isLogin ? "py-6" : "p-4"} bg-none`}>
            {isLogin ? (
                <div className="w-2/4 md:w-1/6 md:ml-16">
                    <img src="/src/assets/images/logo.png" className="contain"/>
                </div>
            ) : (
                <div className="flex justify-between w-full gap-4">
                    <nav className="text-white md:flex justify-center items-center">
                        <div className="flex justify-start items-center">
                            <IoMdMenu className="text-white md:hidden w-56" size={100}  />

                            <img src="/src/assets/images/logo.png" className="w-48"/>
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

                    <div className="text-white hidden md:flex gap-4 items-center justify-end">
                        <div className="flex items-center gap-2">
                            <div className={`items-center bg-zinc-800 p-1 gap-2 border border-white ${searchInput ? "flex" : "hidden"} animate-slideIn`} onBlur={() => setSearchInput(false)}>
                                <CiSearch size={20} />
                                <input ref={searchRef} type="search" placeholder="Títulos, gente e gêneros" className="w-full bg-zinc-800 outline-none" style={{ appearance: "none", WebkitAppearance: "none" }} />
                            </div>
                            <CiSearch size={20} onClick={() => setSearchInput(true)} className={`cursor-pointer ${searchInput ? "hidden" : "flex"}`} />
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

                    <div className="w-full flex justify-end items-center md:hidden">
                        <input type="search" placeholder="Buscar" className="px-2 p-1 w-3/4 text-2xl text-white bg-zinc-800 border border-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded" style={{ appearance: "none", WebkitAppearance: "none" }} />
                    </div>
                </div>
            )}
        </header>
        
    )
}

Header.propTypes = {
    isLogin: PropTypes.bool.isRequired
}