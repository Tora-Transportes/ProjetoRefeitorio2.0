import React, { useRef, useState } from 'react';
import style from '../MenuSuperior/menu.css';
import logo from '../img/logotora75x72.png';
import icons from 'material-icons';
import { useOutsideClick } from "../MenuSuperior/useOutsideClick";
import {  Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import MaterialIcons from 'material-icons';


function Menu() {


    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)


    return (
        <div>
            {/*        
            <div className="menu-container" id='cabecalho' >
                <img src={logo} alt="Logo Tora" />
                <button onClick={onClick} className="menu-button" id="cor-botao-menu"><i className="material-icons left">reorder</i></button>
                <nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`} >
                    <ul id='ul'>
                        <li id='li' className='link1'>
                            <a id='a' href="/">Home</a>
                        </li>
                        <li id='li' className='link1'>
                            <a id='a' href="/consulta">Consulta QR Code</a>
                        </li>
                    </ul>
                </nav >
            </div> */}
            <div>
                <Navbar light expand="md" >
                    <div className='menu-estilo'>
                        <NavbarBrand href="/" ><img src={logo} alt="Logo Tora" /></NavbarBrand>
                        <NavbarToggler onClick={onClick} id="estilo-botao-menu" className="Hamburger"><i className="material-icons-outlined" id='icone'>menu</i></NavbarToggler>
                    </div>

                    <Nav ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`} navbar id="geral">
                        <div className='campos'>
                            <NavItem id='link1'>
                                <NavLink href="/"  >Home</NavLink>
                            </NavItem>
                            <NavItem id='link2' >
                                <NavLink href="/consulta" >Consulta QRcode</NavLink>
                            </NavItem>
                            <NavItem id='link3'>
                                <NavLink href="/" >Cadastro</NavLink>
                            </NavItem>
                            <NavItem id='link4'>
                                <NavLink href="/gerarlista" >CPF's inválidos</NavLink>
                            </NavItem>
                            <NavItem id='link5'>
                                <NavLink href="/" >Sair<i className="material-icons-outlined">login</i></NavLink>
                            </NavItem>
                         
                        </div>
                    </Nav>

                </Navbar>
            </div>

             <div className='Menu-web'>
                <img src={logo} alt="" />
                <nav className='Menu-Secundario'>
                    <ul id='ul' className='Menus'>
                        <li>
                            <a id='a' href="/">Home</a>
                        </li>
                        <li>
                            <a id='a' href="/">Cadastro</a>
                        </li>
                        <li>
                            <a id='a' href="/">Login</a>
                        </li>
                    </ul>
                </nav>
            </div> 
        </div>
    )
}
export default Menu;