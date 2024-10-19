export function Header({ isLogin }){
    return (
        <header className={`w-full ${!isLogin && "bg-black lg:bg-black/70"} py-4 px-2 lg:py-8`}>
            {isLogin ? (
                <div className="w-2/4 lg:w-1/6">
                    <img src="/src/assets/images/logo.png" className="lg:mx-24"/>
                </div>
            ) : (
                <h1>Header geral</h1>
            )}
        </header>
        
    )
}