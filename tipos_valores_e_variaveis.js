//java script pode intrepetar números em octal logo é extremamente recomendável não colocar um 0 na frente de um valor númerico para ele não ser mal intrepretado
//exemplo:
var a = 011
console.log(a) // o valor aprensetado é 9 = 1*8¹ + 1*8⁰ 
var a = 11
console.log(a)// 11
console.log (0/0)// NaN
console.log(1/0)// infinity
console.log(0.3-0.2!= 0.1)//true
//           date 
var _then = new Date(2023, 0, 10, 21, 43);
console.log(_then) 
var now = new Date();
console.log(now);
 var tempo_desde_da_ciração = (now -_then)/3600000;
 console.log("desde da criação até os dias atuais tem \b" + tempo_desde_da_ciração.toFixed(2) + "\b horas de criação desse programa");

 console.log("o ano atual é:\b" + now.getFullYear());//não está funcionando da forma que eu quero, aparentemente na declaração não posso colocar só o ano  
 var mes = now.getMonth();
 function meses(mes) {
    let mes1
    if (mes == 0) {
        mes = "january";
    }
    if (now.getMonth() == 1) {
        mes = "febuary" ;
    }
    if (now.getMonth() == 2) {
        mes = march;
    }
    if (now.getMonth() == 3) {
        mes1 = "april";
    }
    if (now.getMonth() == 4) {
        mes = "may";
    }
    if (now.getMonth() == 5) {
        mes1 = "june";
    }
    if (now.getMonth() == 6) {
        mes = "july";
    }
    if (now.getMonth() == 7) {
        mes1 = "agust";
    }
    if (now.getMonth() == 8) {
        mes1 = "september"        

        }
    if (now.getMonth() == 9) {
        mes1 = "ouctober";
    }
    if (now.getMonth() == 10) {
        mes1 = "november ";
    }
    if (now.getMonth() == 11){
        mes1 = "december"
    }

    return mes; 
 }
 console.log("o mês atual é:\b" + meses(mes) );
 // uma forma muito mais simples que não usa 12 ifs;
 var date1 =  new Date (2022,11,1 );
 console.log(date1)
 var messes_do_ano = ["janeiro", "fevereiro", "março", "abril","maio", "junho" ,"julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
 

 console.log(messes_do_ano[date1.getMonth()])