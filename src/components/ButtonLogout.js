import { useStore } from "../zustand.config"

export const ButtonLogout = () => {
    const store = useStore()
    return (
        <button className={`flex items-center justify-center p-[1rem] rounded-[1rem] w-full max-w-[30rem] shadow-[inset_0rem_0rem_2rem_0_#6366f1] opacity-[50%] font-bold italic duration-[.5s] hover:opacity-[100%]`}
            onClick={() => store.logout()}>
            WYLOGUJ SIĘ
        </button>
    )
}