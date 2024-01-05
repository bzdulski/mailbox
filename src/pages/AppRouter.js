import { BrowserRouter, Routes, Route } from "react-router-dom"

import { AppIndex } from "./AppIndex"
import { AppEmail } from "./AppEmail"
import { AppError } from "./AppError"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppIndex/>}>
              <Route path="/" element={<AppEmail/>}/>
              <Route path="*" element={<AppError/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}