import PropTypes from "prop-types"

export function Header({ isLogin }){
    return (
        <header className={`w-full ${!isLogin && "bg-black/70"} py-6`}>
            {isLogin ? (
                <div className="w-2/4 md:w-1/6 md:ml-16">
                    <img src="/src/assets/images/logo.png" className="contain"/>
                </div>
            ) : (
                <h1>Header geral</h1>
            )}
        </header>
        
    )
}

Header.propTypes = {
    isLogin: PropTypes.bool.isRequired
}