import { useForm } from "react-hook-form"
import { useStore } from "../zustand.config"

export const FormAuth = () => {
    const store = useStore()
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: {email: "admin@gmail.com", password: "123456"} })

    return ( 
        <form className="flex flex-col gap-[1rem] w-full" onSubmit={handleSubmit(event => store.login(event))}>
            <p className={`font-bold italic`}>LOGOWANIE</p>
            <input className={`placeholder-[#ffffff40] text-[#ffffff] duration-[.5s] focus:shadow-[inset_0rem_0rem_2rem_0_#ffffff] hover:text-[#ffffff] hover:shadow-[inset_0rem_0rem_2rem_0_#ffffff] outline-none p-[1rem] rounded-[1rem] max-w-[30rem] bg-[transparent] ${errors.email ? `shadow-[inset_0rem_0rem_2rem_0_#ed143d]` : `shadow-[inset_0rem_0rem_2rem_0_#808080]`}`} 
                placeholder="Email"
                {...register("email", {/*pattern: "",*/required: true})}/>
            <input className={`placeholder-[#ffffff40] text-[#ffffff] duration-[.5s] focus:shadow-[inset_0rem_0rem_2rem_0_#ffffff] hover:text-[#ffffff] hover:shadow-[inset_0rem_0rem_2rem_0_#ffffff] outline-none p-[1rem] rounded-[1rem] max-w-[30rem] bg-[transparent] ${errors.password ? `shadow-[inset_0rem_0rem_2rem_0_#ed143d]` : `shadow-[inset_0rem_0rem_2rem_0_#808080]`}`} 
                type="password"
                placeholder="Hasło"
                {...register("password", {/*pattern: "",*/required: true})}/>
            <button className={`flex items-center justify-center p-[1rem] rounded-[1rem] max-w-[30rem] shadow-[inset_0rem_0rem_2rem_0_#6366f1] opacity-[50%] font-bold italic duration-[.5s] hover:opacity-[100%]`}>ZALOGUJ SIĘ</button>
            {store.error && <div className="text-[#ed143d] italic">{store.error}</div>}
        </form>
    )
}