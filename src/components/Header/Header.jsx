import PropTypes from "prop-types"
import { IoMdMenu } from "react-icons/io";

export function Header({ isLogin }){
    const navigationOptions = []
    return (
        <header className={`w-full bg-none ${isLogin ? "py-6" : "p-3"} bg-black`}>
            {isLogin ? (
                <div className="w-2/4 md:w-1/6 md:ml-16">
                    <img src="/src/assets/images/logo.png" className="contain"/>
                </div>
            ) : (
                <div className="flex justify-between">
                    <div className="flex justify-start items-center w-full">
                        <IoMdMenu className="text-white lg:hidden" size={32} />

                        <div className="w-1/3">
                            <img src="/src/assets/images/logo.png" className="contain"/>
                        </div>
                    </div>

                    <div className="w-full flex justify-end">
                        <input type="search" placeholder="Buscar" className="px-2 text-white bg-zinc-800 border border-white lg:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded" style={{ appearance: "none", WebkitAppearance: "none" }} />
                    </div>
                </div>
            )}
        </header>
        
    )
}

Header.propTypes = {
    isLogin: PropTypes.bool.isRequired
}