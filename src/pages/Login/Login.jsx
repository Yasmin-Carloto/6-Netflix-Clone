import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { MdOutlineCancel } from "react-icons/md";
import { useToken } from "../../contexts/TokenContext";
import { createWT } from "../../api/Login/createJWT";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [showRecaptchaInfo, setShowRecaptchInfo] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState("Portuguese")
    const { setToken, setRememberMe } = useToken()
    const navigate = useNavigate()
    const languagesOptions = ["Português", "English"]

    const [formFieldsData, setFormFieldsData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({})

    function validate() {
        const allErrors = {}

        if(formFieldsData.email == ""){
            allErrors.email = "Campo email é obrigatório!"
        }else if(!/\S+@\S+\.\S+/.test(formFieldsData.email)){
            allErrors.email = "Campo email está inválido!"
        }else if(formFieldsData.email != "emailparaentrar@gmail.com"){
            allErrors.email = "Este email não está cadastrado!"
        }

        if(formFieldsData.password == ""){
            allErrors.password = "Campo senha é obrigatório!"
        }else if(formFieldsData.password != "12345678"){
            allErrors.password = `Campo senha está incorreto para usuário ${formFieldsData.email}.`
        }

        return allErrors
    }

    function handleChange(event) {
        const { name, value } = event.target
        setFormFieldsData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const allErrors = validate()

        if(Object.keys(allErrors).length === 0){
            setErrors({})
            const generatedToken = createWT(formFieldsData)
            setToken(generatedToken)
            navigate("/")
        }else{
            setErrors(allErrors)
        }
    }

    return (
        <div className="bg-black md:bg-login-background flex bg-cover flex-col min-h-screen items-center">
            <div className="flex-grow w-full h-full flex flex-col items-center bg-black/50">
                <Header isLogin={true} onScroll={false} />
                <form className="w-full md:w-1/2 p-8 md:px-20 md:py-12 flex flex-col gap-4 bg-black/70 rounded-xl mb-16 mt-40" onSubmit={handleSubmit}>
                    <h1 className="text-white font-bold text-3xl">Entrar</h1>

                    <div className="flex flex-col gap-2">
                        <label className="relative text-white">
                            <input required type="text" className="w-full bg-zinc-800 px-2 py-3 text-base outline-none border-2 border-gray-500 rounded peer focus:border-gray-200 duration-200" onChange={(e) => handleChange(e)} name="email" />
                            <span className="absolute left-0 top-2 pointer-events-none text-base peer-focus:text-xs duration-200 peer-focus:-translate-y-2 peer-focus:px-1 mt-1 ml-2 mb-1 peer-valid:text-xs peer-valid:-translate-y-2">Email</span>
                        </label>
                        {errors.email && 
                            <p className="text-xs text-red-500 text-left flex items-center gap-1">
                                <MdOutlineCancel />
                                {errors.email}
                            </p>
                        }

                        <label className="relative text-white">
                            <input required type="password" className="w-full bg-zinc-800 px-2 py-3 text-base outline-none border-2 border-gray-500 rounded peer focus:border-gray-200 duration-200" onChange={(e) => handleChange(e)} name="password" />
                            <span className="absolute left-0 top-2 pointer-events-none text-base peer-focus:text-xs duration-200 peer-focus:-translate-y-2 peer-focus:px-1 mt-1 ml-2 mb-1 peer-valid:text-xs peer-valid:-translate-y-2">Senha</span>
                        </label>
                        {errors.password && 
                            <p className="text-xs text-red-500 text-left flex items-center gap-1">
                                <MdOutlineCancel />
                                {errors.password}
                            </p>
                        }
                    </div>

                    <div className="text-white flex flex-col items-center gap-4">
                        <button className="w-full p-2 bg-red-600 hover:bg-red-700 rounded font-semibold">Entrar</button>
                        <span className="text-gray-300">OU</span>
                        <button className="bg-zinc-300/40 hover:bg-zinc-400/40 w-full p-2 font-semibold rounded">Usar um código de acesso</button>
                        <p className="hover:underline hover:text-gray-400 cursor-pointer">Esqueceu a senha?</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <input className="w-4 cursor-pointer" type="checkbox" name="remember-me" id="remember-me" onChange={() => setRememberMe(true)} />
                            <label htmlFor="remember-me" className="text-white text-base">Lembre-se de mim</label>
                        </div>

                        <div className="flex gap-1">
                            <p className="text-gray-400">Novo por aqui?
                                <a href="#" className="text-white cursor-pointer hover:underline pl-1">Assine agora.</a>
                            </p>
                        </div>

                        <div className="text-gray-400 text-xs flex flex-col gap-2">
                            <p className="">Essa página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.  
                                <span className={`text-blue-500 cursor-pointer hover:underline pl-1 ${!showRecaptchaInfo ? "" : "hidden"}`} onClick={() => setShowRecaptchInfo(true)}>Saiba mais.</span>
                            </p>

                            <p className={`text-xs ${showRecaptchaInfo ? "" : "hidden"}`}>As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <span className="text-blue-500 cursor-pointer">Política de Privacidade</span> e <span className="text-blue-500 cursor-pointer">Termos de Uso</span>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).</p>
                        </div>
                    </div>
                </form>
                <Footer selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} languagesOptions={languagesOptions} isLogin={true} />
            </div>
        </div>
    )
}