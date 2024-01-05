export const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-[1rem]">
            <div>
                <p className={`absolute flex items-center justify-center text-[#ed143d] text-center w-[15rem] font-bold text-3xl italic z-[1] blur-[.5rem] rotate-[-15deg]`}>BŁĄD 404</p>
                <p className={`flex items-center justify-center text-[#ed143d] text-center w-[15rem] font-bold text-3xl italic z-[1] rotate-[-15deg]`}>BŁĄD 404</p>
            </div>
            <p className="w-[30rem] text-center rotate-[-15deg]">Przepraszamy ale strona, której szukasz nie istnieje, sprawdź czy poprawnie wpisałeś adres url w wyszukiwarce!</p>
        </div>
    )
}