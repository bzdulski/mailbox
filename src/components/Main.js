import { Outlet } from "react-router-dom"
import { useStore } from "../zustand.config"

import { Loading } from "../components/Loading"
import { FormAuth } from "../components/FormAuth"

export const Main = () => {
    const store = useStore()
    return (
        <main className={`min-h-[100vh] max-w-[30rem] flex flex-col items-center justify-center text-center p-[2rem] m-auto gap-[3rem] animate-[appear_1s_linear]`}>
            {store.loading ?
                <Loading/>
            :
                <>
                    {store.auth ? 
                        <Outlet/>
                        :
                        <FormAuth/>
                    }
                </>
            }
        </main>
    )
}