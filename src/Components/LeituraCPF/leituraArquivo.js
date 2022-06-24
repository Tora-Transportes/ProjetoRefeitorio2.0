const { validaCPF } = require('../../Util/validaCPF')
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

        var x = campos[0]
        let cpfinvalido = validaCPF(x)
        if(cpfinvalido != undefined)
        fs.appendFile('cpfIncorreto.txt', "\n" + cpfinvalido , function (err) {
          
            if (err) {
                throw err;
            }

        })
        const user = {
            CPF: campos[0],
            NOME: campos.slice(1).join(' ').trim()
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
                //console.log("Arquivo criado");
            })
        }

    })


    readline.clearScreenDown
}
readFileByLine('listaFuncionario.txt')