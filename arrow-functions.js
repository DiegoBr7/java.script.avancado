let dobro = (x) => {
    console.log(2*x)
}
dobro(15)


let dobro2 = x => (2*x)

console.log(dobro2(18))







let dobro3 = () => {console.log(this)};


let numero = {
    x : 8,
    d : dobro
}

dobro=dobro.bind(numero)

numero.d();
//console.log(dobro2(18))

