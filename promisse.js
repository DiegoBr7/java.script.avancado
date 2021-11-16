let U = ["a","b","c"];


let promose = new Promise(function(resolve , reject){

    function inserirUsuario(nome ){

        setTimeout(() =>{
          U.push(nome);
       let error = false;
       if (!error){
       resolve();
       else{
           reject({"erro"})
       }    

       return promise

 })



 function listaU(){
    console.log(U)
 }
 inserirUsuario("igor",listaU)
