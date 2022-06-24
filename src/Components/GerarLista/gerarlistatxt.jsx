import React from "react";
import { Button, Card, Input } from "reactstrap";
import MenuSuperior from '../MenuSuperior/menu.jsx';
import style from '../GerarLista/style.css';
import * as yup from 'yup';

function GerarLista() {
    let schema = yup.object().shape({
        cpf: yup.number().max(11),
    });



    return (
        <div>
            <div>
                <MenuSuperior />
                <Card id="estilo-card-gerar-lista" className="card-gerar">
                    <div className="linha1-titulo">
                        <p id="titulo-gerar-cpf" className="titulo-geralista"><strong> CPF's Inválidos</strong></p>
                        <Button id="botao-cor-gerarlist" className="gerarlista">Gerar Lista</Button>
                    </div>
                    <div className="linha2-textarea">
                        <Input type="textarea" placeholder="Lista CPF's Inválidos" id="estilo-textarea" className="input-textarea"></Input>
                        <Button id="estilo-botao-salvarcpf" className="botao-salvarlista">Salvar</Button>
                    </div>                
                </Card>
            </div>
        </div>
    )
}

export default GerarLista;

