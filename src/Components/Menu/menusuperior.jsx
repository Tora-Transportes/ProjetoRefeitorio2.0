import { event } from "jquery";
import React, { useEffect, useState } from "react";
import logo from '../img/logotora75x72.png';
import style from '../Menu/style.css';
import { NavbarBrand } from "reactstrap";
import MaterialIcons from 'material-icons';
function Menusuperior() {



    const [isNavExpanded, setIsNavExpanded] = useState(false)

    // useEffect(() => {
    //     const btnMobile = document.getElementById('btn-mobile');
    //     const nav = document.getElementById('nav')
    //     nav.classList.toggle('active')
    // }, [])


    return (
        <div id="header">           
            <NavbarBrand href="/" ><img src={logo} alt="Logo Tora" id='logo'  /></NavbarBrand>
            <nav id="nav" className={isNavExpanded ? "active" : "inactive"}>
                <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false" onClick={() => {setIsNavExpanded(!isNavExpanded); }}><span id="hamburguer"></span></button>
                <ul id="menu" role="menu"  >
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Cadastro</a></li>
                    <li><a href="/consulta">Consulta QRcode</a></li>
                    <li><a href="/gerarlista">CPF's Inválidos</a></li>
                    <li><a href="/">Sair</a></li>
              
                </ul>
      {/* <li><a href=""><i className="material-icons-outlined">home</i>Inicio</a></li>
                    <li><a href=""><i className="material-icons-outlined">perm_identity</i>Cadastro</a></li>
                    <li><a href=""><i className="material-icons-outlined">qr_code_2</i>Consulta QRcode</a></li>
                    <li><a href=""><i className="material-icons-outlined">description</i>CPF's Inválidos</a></li>
                    <li><a href=""><i className="material-icons-outlined">login</i>Sair</a></li> */}
            </nav>
        </div>
    )
}
export default Menusuperior;