import { Route, Routes } from "react-router"
import { DcScreen } from "../components/dc/DcScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { SearchSreen } from "../components/search/SearchSreen"
import { Navbar } from "../components/ui/Navbar"


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path='/hero/:id' element={<HeroScreen />} />
                    <Route path='/marvel' element={<MarvelScreen />} />
                    <Route path='/dc' element={<DcScreen />} />
                    <Route path='/search' element={<SearchSreen />} />
                    <Route path='/' element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}
