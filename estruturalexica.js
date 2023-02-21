console.log("reconhecido pelo java script como espaço em branco:  ")
console.log('aa_\u0009_aa,tabulação ')  /*tabulação */
console.log("aa_\u000B_aa,tabulação vertical") // tabulação vertical
console.log("aa_\u000C_aa") //avanço de página
console.log("aa_\u00A0_aa") //espaço não separável
console.log("aa_\uFEFF_aa") //marca de byte
 /*
 pode ser útil
 */
var a = 3;
var b = 4;
console.log(a, ',' + b);
 var a = 1, b = 2;
 console.log(a);
 //cuidado com linhas de código que começem com ([/+ esse caracteres devem ser iniciados
 //com um ponto e vírgula para não gerar intrepertrações erradas dos programas 
// exemplo:
var x = 0;
;[x,x+1,x+2].forEach(console.log); // sem o ponto e vírgula a linha não funciona como deveria 

console.log (true == NaN);