import { useStore } from "../zustand.config"
import { useTimestamp } from "../hooks/useTimestamp"

export const MapEmail = () => {
    const store = useStore()
    return (
        <>
            {store.email.map(e =>
                <div className={`flex flex-col items-start justify-center text-left p-[2rem] rounded-[1rem] w-full max-w-[30rem] ${e.status === "nieprzeczytane" ? `shadow-[inset_0rem_0rem_2rem_0_#ed143d]` : `shadow-[inset_0rem_0rem_2rem_0_#28c76f]`} opacity-[50%] duration-[.5s] hover:opacity-[100%]`}
                    key={e.id}>
                    <div className="flex gap-[1rem]">
                        <span className="font-['Material_icons']">key</span>
                        <p className="italic">{e.id}</p>
                    </div>
                    <div className="flex gap-[1rem]">
                        <span className="font-['Material_icons']">tag</span>
                        <p className="italic">{e.number}</p>
                    </div>
                    <div className="flex gap-[1rem]">
                        <span className="font-['Material_icons']">person</span>
                        <p className="italic">{e.sender}</p>
                    </div>
                    <br/>
                    <div className="flex gap-[1rem]">
                        <span className="font-['Material_icons']">mail</span>
                        <p className="italic">{e.message}</p>
                    </div>
                    <br/>
                    <p className="m-auto italic">{useTimestamp(e.createdAt)}</p>
                    <br/>
                    {e.status === "nieprzeczytane" && <button className={`m-auto font-bold italic text-[#ed143d]`}
                        onClick={() => store.setEmailStatus({id: e.id, status: "przeczytane"})}>
                        NIEPRZECZYTANE
                    </button>}
                    {e.status === "przeczytane" && <button className={`m-auto font-bold italic text-[#28c76f]`}
                        onClick={() => store.setEmailStatus({id: e.id, status: "nieprzeczytane"})}>
                        PRZECZYTANE
                    </button>}
                </div>
            )}
        </>
    )
}