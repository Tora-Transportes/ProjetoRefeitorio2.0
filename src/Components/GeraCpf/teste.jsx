import React from 'react';
import { Button, Card } from 'reactstrap';
import { generate } from 'gerador-validador-cpf';


function Teste() {

    generate({ format: true })

    // function gerarCpf() {
    //     const n1 = aleatorio(), n2 = aleatorio(), n3 = aleatorio(), d1 = dig(n1, n2, n3);
    //     return `${n1}.${n2}.${n3}-${d1}${dig(n1, n2, n3, d1)}`;
    //   }

    //   function dig(n1, n2, n3, n4) {
    //     var y = 0;
    //     let nums = n1.split("").concat(n2.split(""), n3.split(""), [n4]), x = 0;  
    //     for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) x += +nums[j] * i;
    //     return (y = x % 11) < 2 ? 0 : 11 - (y = x % 11); 
    //   }

    //   const aleatorio = () => ("" + Math.floor(Math.random() * 999)).padStart(3, '0');

    //   document.getElementById("cpf").value = gerarCpf();
    function aleatorio(n){
        var ranNum = Math.round(Math.random()*n);
        return ranNum;     
    }
    function mod(dividendo,divisor){
        return Math.round(dividendo -(Math.floor(dividendo/divisor)*divisor));
    }
    function gerarCPF(){
        var comPontos = true;

        var n = 9;
        var n1 = aleatorio(n);
        var n2 = aleatorio(n);
        var n3 = aleatorio(n);
        var n4 = aleatorio(n);
        var n5 = aleatorio(n);
        var n6 = aleatorio(n);
        var n7 = aleatorio(n);
        var n8 = aleatorio(n);
        var n9 = aleatorio(n);
        var d1 = n9*2 + n8*3 + n7*4 + n6*5 + n5*6 + n4*7 + n3*8 + n2*9 + n1*10;
        d1 = 11 - (mod(d1,11));
        if(d1 >= 10)d1 = 0;
        var d2 = d1*2 + n9*3 + n8*4 + n7*5 + n6*6 + n5*7 + n4*8 + n3*9 + n2*10 + n1*11;
        d2 = 11 - (mod(d2,11));
        if(d2 >= 10) d2 = 0;
        
        var cpf = 0;
        if(comPontos) cpf = '' +n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
         else cpf = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
        alert(cpf)
    }
  


    return (
        <div>
            <Card>
                <input type="text" id="cpf" value="cpf"/>
                <Button onClick={gerarCPF}>Gera</Button>

            </Card>
        </div>
    )
}
export default Teste;