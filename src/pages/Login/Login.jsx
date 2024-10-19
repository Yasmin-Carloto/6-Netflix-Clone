import { Header } from "../../components/Header/Header";

export function Login() {
    return (
        <div className="bg-black lg:bg-black/60 h-full">
            <Header isLogin={true} />
        </div>
    )
}