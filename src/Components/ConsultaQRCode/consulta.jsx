import React, { useState, useEffect } from 'react';
import { Card, Input } from "reactstrap";
import { Button } from "@material-ui/core";
import MenuSuperior from '../MenuSuperior/menu.jsx';
import style from '../ConsultaQRCode/style.css';
import jsPDF from 'jspdf';
import autoTable  from 'jspdf-autotable'

function Consulta() {




    function PDF() {   
        var pdf = new jsPDF();     
    
        var imgData = 'data:image/jpeg;base64, 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';
       //console.log(imgData); 
        pdf.setFontSize(40);
        pdf.text(65, 20, 'Seu QRcode');        
        pdf.addImage(imgData, 'JPEG', 85, 40, 40, 40);
        pdf.save('QRcode');
        window.open(pdf.output('bloburl'), '_system');
    };


    const [open, setOpen] = useState(false);
    
    const [abrir, setAbrir] = useState(false);


    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(400);
    const [bgColor, setBgColor] = useState("ffffff");
    const [qrCode, setQrCode] = useState("");


    useEffect(() => {
        setQrCode
            (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
    }, [word, size, bgColor]);




    function handleClick() {
        setWord(temp);
       

        // if (open) {
        //     return setOpen(false)
        // }
        setOpen(true)
        setAbrir(true)
        // document.location.reload()
    }


    return (
        <div>
            <div >
                <MenuSuperior />
            </div >
            <Card id="estilo-card" className="card-principal">
                <div className="Campos">
                    <p id='titulo-consulta'><strong>Consulta QR Code</strong></p>
                    <div className="campos2">
                        <Input
                            id="Estilo-Campo-Nome"
                            placeholder="CPF"
                            required
                            type="text"
                            onChange={(e) => { setTemp(e.target.value) }}

                        ></Input>
                        <Button id="cor-botao" onClick={handleClick} className="button">Consultar</Button>
                    </div>
                    <div>                 
                        {open &&
                            <>
                                <img src={qrCode} alt="" id="tamanho-qrcode" className="qrcode" />
                            </>
                        }
                    </div>

                    <div className='Botao-baixar-pdf'> 
                        {abrir &&
                            <Button id="cor-botao-pdf" onClick={PDF}>Gerar PDF/Download</Button>
                        }
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Consulta;
