var ransomNote = "voce" 
var magazine = "vollei"
rN_arr = [...ransomNote]

    var retorno;
    
    for (let i = 0; i < rN_arr.length; i++) {
         if(magazine.includes(rN_arr[i])){
            retorno = true
           magazine = magazine.replace(rN_arr[i],'')
         }else{
            retorno = false;
           break;

         }
         
    }
   console.log(retorno)

