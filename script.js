//let myName = "Clara 4ler";
//let myArray = Array.from(myName); -->El problema de hacerlo así es que convierte los números en Strings

let myArray = ['C','L', 4 ,'R','A','A','L', 3 ,'R'];

for (i = 0; i< myArray.length; i++){
    if(myArray[i] == "a" || myArray[i] == "e" || myArray[i] == "i"|| myArray[i] == "o"|| myArray[i] == "u"){
        console.log("He trobat la VOCAL " + myArray[i]);
    }
    else if(typeof myArray[i] == 'number'){
        console.log("Els noms no contenen el número: "+ myArray[i]);
    }
    else{
        console.log("He trobat la CONSONANT " +myArray[i]);
    }
}