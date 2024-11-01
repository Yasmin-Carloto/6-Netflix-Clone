export function Header({ isLogin }){
    return (
        <header className={`w-full ${!isLogin && "bg-black/70"} py-4 px-2 md:py-8`}>
            {isLogin ? (
                <div className="w-2/4 md:w-1/6">
                    <img src="/src/assets/images/logo.png" className="md:mx-24"/>
                </div>
            ) : (
                <h1>Header geral</h1>
            )}
        </header>
        
    )
}