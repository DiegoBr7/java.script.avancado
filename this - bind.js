function speakGeneric(){
    console.log(this.sound)
}

let dog = {
    sound : "au au" ,
    speak : speakGeneric
    }

    let cat = {
        sound : "miau" ,
        speak :speakGeneric
        }



//dog.speak();
//cat.speak();

let bindedFunction = speakGeneric.bind(cat);

bindedFunction();