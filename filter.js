

function novoAluno (nome,idade){

return {nome , idade}

}
let alunos = [
    
      
       novoAluno("Ti" , 25),
       novoAluno("Ya" , 24),
       novoAluno("Pe" , 29),
       novoAluno("Ço" , 28)

];
function Menos30 (aluno){
    return aluno.idade < 30
}

function Mais30 (aluno){
    return aluno.idade > 30
}

let alunoMenos30 = alunos.filter(Mais30)

console.log(Menos30)