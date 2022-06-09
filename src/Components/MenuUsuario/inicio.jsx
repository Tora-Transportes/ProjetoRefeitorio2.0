import React, { useState, useEffect } from "react";
import style from '../MenuUsuario/style.css';
import { Card, Input } from "reactstrap";
import { Button } from "@material-ui/core";
import MenuSuperior from '../MenuSuperior/menu.jsx';

function Inicio() {

    const [open, setOpen] = useState(false);

    const [temp1, setTemp1] = useState({});
    const [word1, setWord1] = useState(""); 

    const [temp, setTemp] = useState("");  
    const [word, setWord] = useState("");
    const [size, setSize] = useState(400);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");

    useEffect(() => {
        setQrCode
            (`http://api.qrserver.com/v1/create-qr-code/?data=${'USUÁRIO: '+word+ "   CPF: "+word1 }!&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor, word1]);




    function handleClick() {
        setWord(temp);
        setWord1(temp1);

        
        // if (open) {
        //     return setOpen(false)
        // }
        setOpen(true)
        // document.location.reload()
    }

    return (
        <div>
            <div >
                <MenuSuperior />
            </div >
            <Card id="estilo-card" className="card-principal">
                <div className="Campos">
                    <p><strong>Cadastro</strong></p>
                    <div className="campos2">
                        <Input
                            id="Estilo-Campo-Nome"
                            placeholder="Nome Sobrenome"
                            required
                            type="text"
                            onChange={(e) => { setTemp(e.target.value) }}

                        ></Input>
                        <Input
                            id="Estilo-Campo-Nome"
                            placeholder="CPF"
                            type="text"
                            required
                            onChange={(e) => { setTemp1(e.target.value) }}></Input>
                        <Button id="cor-botao" onClick={handleClick} className="button">Cadastrar</Button>
                    </div>
                    <div>
                        {open &&
                            <>
                                <img src={qrCode} alt="" id="tamanho-qrcode" className="qrcode" />
                            </>                            
                        }
                    </div>

                </div>
            </Card>
        </div >
    )
}
export default Inicio;