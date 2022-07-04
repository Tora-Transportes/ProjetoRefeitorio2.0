import React, { useRef, useState } from 'react';
import style from '../MenuSuperior/menu.css';
import logo from '../img/logotora75x72.png';
import { useOutsideClick } from "../MenuSuperior/useOutsideClick";
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import MaterialIcons from 'material-icons';

function Menu() {


    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)
    return (
        <div>
            <div className='menu-mobile'>
                <Navbar light expand="md" >
                    <div className='menu-estilo'>
                        <NavbarBrand href="/" ><img src={logo} alt="Logo Tora" /></NavbarBrand>
                        <NavbarToggler onClick={onClick}  id="estilo-botao-menu" className="Hamburger"><i className="material-icons-outlined" id='icone'>menu</i></NavbarToggler>
                    </div>
                        <Nav navbar id="geral" ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                            <div className='campos'>
                                <NavItem id='link1'>
                                    <NavLink href="/" >Inicio</NavLink>
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
                                    <NavLink href="/" >Sair<i className="material-icons-outlined">Sair</i></NavLink>
                                </NavItem>
                            </div>
                        </Nav>
                </Navbar>
            </div>

            <div className='Menu-web'>
                <img src={logo} alt="" href='/' className='log-tam'/>
                <nav className='Menu-Secundario'>
                    <ul id='ul' className='Menus'>
                        <li>
                            <a id='a' href="/">Inicio</a>
                        </li>
                        <li>
                            <a id='a' href="/">Cadastro</a>
                        </li>
                        <li>
                            <a id='a' href="/consulta">Consulta QRcode</a>
                        </li>
                        <li>
                            <a id='a' href="/gerarlista">CPF's Inválidos</a>
                        </li>
                    
                        <li>
                            <a id='a' href="/">Sair</a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
export default Menu;