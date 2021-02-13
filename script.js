//let myName = "Clara 4ler";
//let myArray = Array.from(myName); -->El problema de hacerlo así es que convierte los números en Strings

/*EXERCICI 1 i 2*/
let myName = ['C','L', 4 ,'R',4];

for (i = 0; i< myName.length; i++){
    if(myName[i] == "a" || myName[i] == "e" || myName[i] == "i"|| myName[i] == "o"|| myName[i] == "u"){
        console.log("He trobat la VOCAL " + myName[i]);
    }
    else if(typeof myName[i] == 'number'){
        console.log("Els noms no contenen el número: "+ myName[i]);
    }
    else{
        console.log("He trobat la CONSONANT " +myName[i]);
    }
}
/*EXERCICI 3*/
let mapaNombre = {C:1, L:2, A:3, R:2, E:1} ;
console.log(mapaNombre);

/*EXERCICI 4*/
function namePrinter (array_name, array_surname){

    let length_surname = array_surname.length;
    array_name.push(" ");

    for (i = 0; i<length_surname; i ++ ){
        let element = array_surname[i];
        array_name.push(element);
    }

}

let mySurname = ['A', 'L', 'E', 'R'];
namePrinter(myName, mySurname);
console.log (myName);