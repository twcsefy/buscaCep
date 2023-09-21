import React from "react";

import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import BuscaCep from "../BuscaCEPForm";
import Listagem from "../Listagem";
import Cadastro from "../Cadastro";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="buscacep" element={<BuscaCep />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="listagem" element={<Listagem />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter;