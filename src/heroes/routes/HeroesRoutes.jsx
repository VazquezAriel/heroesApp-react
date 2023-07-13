import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { DCPage } from "../pages/DCPage"
import { MarvelPage } from "../pages/MarvelPage"
import { HeroPage } from "../pages/HeroPage"
import { SearchPage } from "../pages/SearchPage"


export const HeroesRoutes = () => {


    return (<>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="dc" element={<DCPage/>}/>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="search" element={<SearchPage/>}/>
                <Route path="heroe/:id" element={<HeroPage/>}/>

                <Route path="/" element={<Navigate to='/marvel'/>}/>
            </Routes>
        </div>
    </>)
} 