import PropTypes from "prop-types"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

export function Footer({ selectedLanguage, setSelectedLanguage, languagesOptions, isLogin }) {
    return (
        <footer className="md:bg-gradient-to-b md:from-black/80 md:to-black/100 w-full border-t-2 border-gray-400 md:border-none p-4 mt-auto">
            {isLogin ? (
                <div className="text-base text-gray-400 flex flex-col justify-center gap-6 p-4 md:w-4/5 md:p-12">
                    <h1 className="">Dúvidas? Ligue <span className="cursor-pointer hover:underline">0800 591 2876</span></h1>
                    <nav className="flex underline justify-between gap-6">
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="">
                                    Perguntas frequentes
                                </a>
                            </li>
                            <li className="flex md:hidden">
                                <a href="">
                                    Termos de Uso
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Preferências de cookies
                                </a>
                            </li>
                        </ul>

                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="">
                                    Central de Ajuda
                                </a>
                            </li>
                            <li className="flex md:hidden">
                                <a href="">
                                    Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Informações corporativas
                                </a>
                            </li>
                        </ul>

                        <ul className="hidden md:flex md:justify-between w-1/3 gap-6">
                            <li>
                                <a href="">
                                    Termos de Uso
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Privacidade
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <select defaultValue={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className="md:w-1/4 rounded bg-zinc-900 border text-white p-1">
                        {languagesOptions.map((item) => (
                            <option key={item} value={`Portuguese`}>
                                🌐
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            ) : (
                <div className="text-white flex flex-col gap-8 p-4 md:p-24">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-start text-xl gap-8">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <FaYoutube />
                        </div>

                        <ul className="flex flex-wrap text-sm text-gray-400">
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Audiodescrição
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Central de Ajuda
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Cartão pré-pago
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Imprensa
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Relações com investidores
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Carreiras
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Termos de Uso
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Privacidade
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Avisos legais
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Preferências de cookies
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Informações corporativas
                                </a>
                            </li>
                            <li className="w-1/2 md:w-1/4 p-2">
                                <a href="">
                                    Informações corporativas
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div className="text-white/45">
                        <button 
                            className="text-wrap text-sm whitespace-nowrap leading-tight text-center py-2 px-6 tracking-widest border-white/45 border hover:border-white/65 hover:text-white/65 my-2"
                        >
                            Código de serviço
                        </button>

                        <p className="text-sm ">&#169; 1997 - 2024 Netflix, Inc.</p>
                    </div>
                </div>
            )}
        </footer>
    )
}

Footer.propTypes = {
    selectedLanguage: PropTypes.string,
    setSelectedLanguage: PropTypes.func,
    languagesOptions: PropTypes.array,
    isLogin: PropTypes.bool.isRequired
}
