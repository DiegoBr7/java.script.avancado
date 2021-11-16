/*function ola (){
    console.log("ola")
}

function tchau (){
    console.log("tchau")
}

function saudacao(s,nome){
    
    s();    
    console.log(nome)
}
saudacao(tchau,"igor")
*/

let U = ["a","b","c"];
 
  function inserirUsuario(nome , callback){

    setTimeout(() =>{
      U.push(nome);
      callback();
    },1000)

 }

 function listaU(){
    console.log(U)
 }
 inserirUsuario("igor",listaU)
