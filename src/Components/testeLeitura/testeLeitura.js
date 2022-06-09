const { cpf } = require('cpf-cnpj-validator');
const fs = require('fs');
const readline = require('readline');

function readFileByLine(file) {

    const fileStream = fs.createReadStream(file);

    const rl = readline.createInterface({
        input: fileStream,
    });
    const usersOnFile = []
    rl.on('line', (line, err, data) => {

        const campos = line.split(' ');
        const user = {
            CPF: campos[0],
            NOME: campos.slice(1).join(' ').trim()
        }

        usersOnFile.push(user)

    })

    rl.on('close', () => {
        // console.log(usersOnFile)
        const Response = usersOnFile.sort((a, b) => (a.NOME > b.NOME) - (a.NOME < b.NOME));
        console.log(Response)

        // const test = ('valida strings formatadas', () => {
        //     expect(CPF.isValid('295.379.955-93')).toBeTruthy()
        // })
        // console.log(test)

        
        // const Validacpf = usersOnFile.sort((a) => (a.CPF) == (a.CPF));
       // console.log(Validacpf)
        const Validacpf = '000.000.000-00'
        console.log(Validacpf)

        if (Validacpf.length == 14) {
            console.log("CPF com tamanho correto!");
        } else {
            console.log("CPF incorreto" );
        }

    


    })


}

readFileByLine('listaFuncionario.txt')



