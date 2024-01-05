import { useEffect } from "react"
import { useStore } from "../zustand.config"

import { Matrix } from "../components/Matrix"
import { Logo } from "../components/Logo"
import { Main } from "../components/Main"
import { Footer } from "../components/Footer"

export const AppIndex = () => {
    const store = useStore()

    useEffect(() => {
      const timeout = setTimeout(async () => {
          await store.fetch()
        }, 1000)
    
        return () => {
          clearTimeout(timeout)
        }
  }, [])

    return (
        <>
            <Matrix/>
            <Logo/>
            <Main/>
            <Footer/>
      </>
    )
}