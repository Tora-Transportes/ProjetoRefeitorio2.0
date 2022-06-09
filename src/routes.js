import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listatexto from "./Components/testeLeitura/testeLeitura";
import Consulta from "./Components/ConsultaQRCode/consulta";
import Menu from "./Components/MenuSuperior/menu";
import Inicio from "./Components/MenuUsuario/inicio";
import Teste from "./Components/Teste/teste";
import Testa from "./Components/util/validacao";


function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Inicio/>}/>
                    <Route path="menu" element={<Menu/>} />
                    <Route path="/consulta" element={<Consulta/>}/>
                    <Route path="/teste" element={<Teste/>}/>
                    <Route path="/listatexto" element={<Listatexto/>}/>
                    <Route path="/testa" element={<Testa/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRoutes;