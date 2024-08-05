import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Sobre from "./pages/sobre";
import E01 from "./pages/e01";
import E02 from "./pages/e02";

function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/e01' element={<E01 />} />
                <Route path='/e02' element={<E02 />} />
            </Routes>
        </BrowserRouter>
    );
}

export { Navigation }