

function validaCPF(cpf) {
  var Soma = 0
  var Resto
  var CPFinvalido
  var i
  
  var strCPF = String(cpf).replace(/[^\d]/g, '')

  if (strCPF.length !== 11) {
    CPFinvalido = strCPF
   // console.log('CPF iválido:', strCPF)
  }

  if ([
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
  ].indexOf(strCPF) !== -1) {
    CPFinvalido = strCPF
    //console.log('CPF com números repetidos:', strCPF)
  }

  for (i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11
  }


  if ((Resto === 10) || (Resto === 11)) {
    Resto = 0
  }

  if (Resto !== parseInt(strCPF.substring(9, 10))) 
    

  for (i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
    Resto = (Soma * 10) % 11
  }

  if ((Resto === 10) || (Resto === 11)){
    Resto = 0
  }

  if (Resto !== parseInt(strCPF.substring(10, 11))) {
  
  }

  return CPFinvalido
}


module.exports = {
  validaCPF,
}