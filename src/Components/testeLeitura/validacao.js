
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


        // const Validacpf = '124.785.957-30'
        // console.log(Validacpf)
  
        const Validacpf = usersOnFile.job.CPF;
            console.log(Validacpf)

        if (Validacpf.length == 14) {

            console.log("CPF correto!");
        } 
        else {
            console.log("CPF incorreto!" );
        }
    


        // const test = ('teste.txt', () => {
        //     if (test.length == 14) {
        //         console.log("CPF correto!");
        //     } 
        //     else {
        //         console.log("CPF incorreto!" );
        //     }
        // })
        // console.log(test)
       


    })


}

readFileByLine('teste.txt')



