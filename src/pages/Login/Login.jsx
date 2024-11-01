import { useState } from "react";
import { Header } from "../../components/Header/Header";

export function Login() {
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
        <div className="bg-black md:bg-login-background flex flex-col h-screen">
            <Header isLogin={true} />
            <form className="w-full p-6 flex flex-col gap-4">
                <h1 className="text-white font-bold text-3xl">Entrar</h1>

                <label className="relative text-white">
                    <input required type="text" className="w-full bg-zinc-800 px-2 py-3 text-base outline-none border-2 border-gray-500 rounded peer focus:border-gray-200 duration-200" />
                    <span className="absolute left-0 top-2 pointer-events-none text-base peer-focus:text-xs duration-200 peer-focus:-translate-y-2 peer-focus:px-1 mt-1 ml-2 mb-1 peer-valid:text-xs peer-valid:-translate-y-2">Email</span>
                </label>

                <label className="relative text-white">
                    <input required type="password" className="w-full bg-zinc-800 px-2 py-3 text-base outline-none border-2 border-gray-500 rounded peer focus:border-gray-200 duration-200" />
                    <span className="absolute left-0 top-2 pointer-events-none text-base peer-focus:text-xs duration-200 peer-focus:-translate-y-2 peer-focus:px-1 mt-1 ml-2 mb-1 peer-valid:text-xs peer-valid:-translate-y-2">Senha</span>
                </label>
            </form>
        </div>
    )
}