import { useState } from "react"

import { MapEmail } from "../components/MapEmail"
import { ButtonLogout } from "../components/ButtonLogout"

export const AppEmail = () => {
    return ( 
        <>
            <MapEmail/>
            <ButtonLogout/>
        </>
    )
}