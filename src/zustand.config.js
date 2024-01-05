import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { serverTimestamp } from "firebase/firestore"

let emailData = [
    {
        id: "rw3VLFczcy4G4SCvB1zF",
        status: "nieprzeczytane",
        number: "0005",
        sender: "admin@gmail.com",
        message: "Witam, jest to nieprzeczytana wiadomość tekstowa od użytkownika admin@gmail.com!",
        createdAt: {
            seconds: "1697796743",
            nanoseconds: "314000000"
        },
    },
    {
        id: "4220KsriyCH8Q2ijSoGR",
        status: "nieprzeczytane",
        number: "0004",
        sender: "111 222 333",
        message: "Witam, jest to nieprzeczytana wiadomość tekstowa od nadawcy o numerze telefonu 111 222 333!",
        createdAt: {
            seconds: "1697746743",
            nanoseconds: "314000000"
        },
    },
    {
        id: "uX9AnU6jTD3oK86s3Ka2",
        status: "przeczytane",
        number: "0003",
        sender: "admin@gmail.com",
        message: "Witam, jest to próbna przeczytana wiadomość tekstowa!",
        createdAt: {
            seconds: "1697846743",
            nanoseconds: "314000000"
        },
    },
    {
        id: "4lD8sWNTDuHYBI6N4oU3",
        status: "nieprzeczytane",
        number: "0002",
        sender: "@mailbox_app",
        message: "Witam, jest to pominięta nieprzeczytana wiadomość tekstowa!",
        createdAt: {
            seconds: "1997746723",
            nanoseconds: "314000000"
        },
    },
    {
        id: "51PwRYoAHbr3XPK1DzTd",
        status: "przeczytane",
        number: "0001",
        sender: "admin@gmail.com",
        message: "Witam, jest to aplikacja mailbox, która zbiera wiadomości z formularza kontaktowego!",
        createdAt: {
            seconds: "1617746743",
            nanoseconds: "314000000"
        },
    },
]

export const useStore = create(devtools((set, get) => ({
    auth: null,
    email: null,

    mobile: null,
    loading: true,
    error: "",

    fetch: async () => {
        try {
            set({ loading: true, error: "" })
      
            set({ loading: false, auth: null, email: null })
        } 
        catch (error) {
            set({ loading: false, error: `fetch/${error.code}` })
        }
    },

    login: async (event) => {
        try {
            set({ loading: true, error: "" })

            if(event.email === "admin@gmail.com" && event.password === "123456") {
                set({ loading: false, auth: true, email: emailData })
            }
            else {
                set({ loading: false, auth: null, email: null, error: `Niepoprawne dane logowania!` })
            }
        }
        catch (error) {
            set({ loading: false, error: `login/${error.code}` })
        }
    },

    logout: async () => {
        try {
            set({ loading: true, error: "" })

            set({ loading: false, auth: null, email: null })
        }
        catch (error) {
            set({ loading: false, error: `logout/${error.code}` })
        }
    },

    setMobile: (event) => {
        set({ mobile: event })
    },

    setEmailStatus: async (event) => {
        try {
            set({ loading: true, error: "" })

            set({ loading: false, email: get().email.map(e => e.id === event.id ? {...e, status: event.status, editedAt: serverTimestamp() } : e)})
        }
        catch (error) {
            set({ loading: false, error: `setEmailStatus/${error.code}` })
        }
    },
    
})))