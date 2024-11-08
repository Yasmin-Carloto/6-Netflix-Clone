import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";

export function Home() {
    return (
        <div className="">
            <Header isLogin={false} />
            <Banner />
        </div>
    )
}