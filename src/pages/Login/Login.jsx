import { useState } from "react";
import { Header } from "../../components/Header/Header";

export function Login() {
    const [showRecaptchaInfo, setShowRecaptchInfo] = useState(false)
    const [formFieldsData, setFormFieldsData] = useState({
        email: "",
        password: "",
    })
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFieldsData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }


    return (
        <div className="bg-black md:bg-login-background bg-no-repeat flex f bg-cover flex-col h-screen items-center">
            <div className="h-full w-full flex flex-col items-center bg-black/40">
                <Header isLogin={true} />
                <form className="w-full md:w-1/5 p-8 md:px-20 md:py-12 flex flex-col gap-4 bg-black/70 rounded-xl">
                    <h1 className="text-white font-bold text-3xl">Entrar</h1>

                    <div className="flex flex-col gap-2">
                        <label className="relative text-white">
                            <input required type="text" className="w-full bg-zinc-800 px-2 py-3 text-base outline-none border-2 border-gray-500 rounded peer focus:border-gray-200 duration-200" />
                            <span className="absolute left-0 top-2 pointer-events-none text-base peer-focus:text-xs duration-200 peer-focus:-translate-y-2 peer-focus:px-1 mt-1 ml-2 mb-1 peer-valid:text-xs peer-valid:-translate-y-2">Email</span>
                        </label>

                        <label className="relative text-white">
                            <input required type="password" className="w-full bg-zinc-800 px-2 py-3 text-base outline-none border-2 border-gray-500 rounded peer focus:border-gray-200 duration-200" />
                            <span className="absolute left-0 top-2 pointer-events-none text-base peer-focus:text-xs duration-200 peer-focus:-translate-y-2 peer-focus:px-1 mt-1 ml-2 mb-1 peer-valid:text-xs peer-valid:-translate-y-2">Senha</span>
                        </label>
                    </div>

                    <div className="text-white flex flex-col items-center gap-4">
                        <button className="w-full p-2 bg-red-600 hover:bg-red-700 rounded font-semibold">Entrar</button>
                        <span className="text-gray-300">OU</span>
                        <button className="bg-zinc-300/40 hover:bg-zinc-400/40 w-full p-2 font-semibold rounded">Usar um código de acesso</button>
                        <p className="hover:underline hover:text-gray-400 cursor-pointer">Esqueceu a senha?</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <input className="w-4" type="checkbox" name="remember-me" id="remember-me" />
                            <label for="remember-me" className="text-white text-base">Lembre-se de mim</label>
                        </div>

                        <div className="flex gap-1">
                            <p className="text-gray-400">Novo por aqui?</p>
                            <p className="text-white cursor-pointer hover:underline">Assine agora.</p>
                        </div>

                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <p className="">Essa página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.  
                                <span className={`text-blue-500 cursor-pointer hover:underline ${!showRecaptchaInfo ? "" : "hidden"}`} onClick={() => setShowRecaptchInfo(true)}> Saiba mais.</span>
                            </p>

                            <p className={`text-xs ${showRecaptchaInfo ? "" : "hidden"}`}>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <span className="text-blue-500">Política de Privacidade</span> e <span className="text-blue-500">Termos de Uso</span>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}