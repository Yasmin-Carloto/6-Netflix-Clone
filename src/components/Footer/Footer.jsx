import { IoLanguage } from "react-icons/io5";

export function Footer({ selectedLanguage, setSelectedLanguage, languagesOptions }) {
    return (
        <footer className="md:bg-gradient-to-b md:from-black/80 md:to-black/100 w-full border-t-2 border-gray-400 md:border-none p-4">
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
        </footer>
    )
}