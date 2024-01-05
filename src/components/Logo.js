import { Link } from "react-router-dom"
import { useStore } from "../zustand.config"

export const Logo = () => {
    const store = useStore()
    return (
        <>
            <Link className={`fixed top-[2.6rem] left-[-2rem] rotate-[-45deg] font-['Montez'] cursor-pointer animate-[appear_1s_linear] peer ${store.mobile ? `hidden` : ``} text-[8rem]`} 
                reloadDocument>
                    mailbox
            </Link>
            <span className={`fixed bg-[#6366f1] top-0 bottom-0 left-0 right-0 h-[20rem] w-[20rem] blur-[10rem] z-[-1] duration-[1s] animate-[appear_1s_linear]`}/>
            <span className={`fixed bg-transparent top-0 bottom-0 left-0 right-0 h-[20rem] w-[20rem] blur-[10rem] z-[-1] duration-[1s] animate-[appear_1s_linear] peer-hover:bg-[#6366f1]`}/>
        </>
    )
}