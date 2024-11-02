import { FaPlusCircle } from "react-icons/fa";

export function SelectProfilePage() {
    return (
        <section className="w-full h-screen bg-black/95 flex flex-col justify-center items-center gap-8">
            <h1 className="text-white text-wrap text-5xl w-full text-center">Quem está assistindo?</h1>
            <div className="flex justify-center items-center flex-wrap gap-8 text-white/45">
                <button className="flex flex-col justify-center items-center gap-2 hover:text-white group">
                    <img src="/src/assets/images/profile-image.jpg" alt="" className="rounded w-28 peer border-transparent border-2 group-hover:border-white
                    " />
                    <p className="">Perfil Número 1</p>
                </button>

                <div className="rounded text-center flex flex-col justify-center items-center gap-2 cursor-pointer hover:text-white/65">
                    <FaPlusCircle className="w-20 h-20 md:w-28 md:h-28" />
                    <p>Adicionar Perfil</p>
                </div>
            </div>
            <button className="text-wrap text-base whitespace-nowrap leading-tight text-center py-2 px-6 tracking-widest border-white/45 text-white/45 border hover:border-white/65 hover:text-white/65 mt-12">Gerenciar perfis</button>
        </section>
    )
}