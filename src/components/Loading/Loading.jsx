import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
    return (
        <div className="text-red-500 animate-spin">
            <AiOutlineLoading3Quarters />
        </div>
    )
}