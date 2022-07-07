const { validaCPF } = require('../../Util/validaCPF')
const fs = require('fs');
const readline = require('readline');
const path = require('path');



function readFileByLine(file) {


    const fileStream =  fs.createReadStream(file);
    const rl = readline.createInterface({
        input: fileStream,
    });
    const usersOnFile = []

    
    rl.on('line', (line, err, data) => {
        const campos = line.split(' ');

        var x = campos[1]
        let ID = campos[0]
        let cpfinvalido = validaCPF(x)
        if(cpfinvalido !== undefined)      

     
        fs.appendFile(path.join(__dirname ,"../../../public/cpfIncorreto.txt"),  "\nID:" + ID + "\t CPF: " + cpfinvalido,

            function (err) {
                if (err) {
                    throw err;
                } 

        });

        const user = {
            ID: campos[0],
            CPF: campos[1],
            NOME: campos.slice(2).join(' ').trim()
        }
        usersOnFile.push(user);   

    })


    rl.on('close', () => {
        const Response = usersOnFile.sort((a, b) => (a.NOME > b.NOME) - (a.NOME < b.NOME));
        console.log(Response)

       
        const verificaArquivo = 'cpfIncorreto.txt';
        
        if (fs.existsSync(verificaArquivo) ) {
            return console.log("O Arquivo já existe")
        }
        else {
            fs.appendFile('cpfIncorreto.txt', "" , function (err) {

                if (err) {
                    throw err;
                }
            })
            console.log("Arquivo Inexistente");
        }

    })


   readline.clearScreenDown
}
readFileByLine('listaFuncionario.txt')





   
        // fs.appendFile('cpfIncorreto.txt', "\n" + cpfinvalido , function (err) {
          
        //     if (err) {
        //         throw err;
        //     }
        // })
        