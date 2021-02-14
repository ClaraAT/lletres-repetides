//let myName = "Clara 4ler";
//let myArray = Array.from(myName); -->El problema de hacerlo así es que convierte los números en Strings

/*EXERCICI 1 i 2*/
/*
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
/*
let mapaNombre = {C:1, L:2, A:3, R:2, E:1} ;
console.log(mapaNombre);

/*EXERCICI 4*/
/*
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
*/

/* EMAIL FINDER */

function emailFinder(inputText){
    const email = /[ñÑ\w+-]+(?=@)@(?<=@)[ñÑ\w+-]+\.(?<=\.)[ñÑ\w+-]+/g;
    let match;
    let emailList = [];

    while ((match = email.exec(inputText)) !== null){
        emailList.push(match[0]);
    }
    console.log(emailList);
}

text = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email"
emailFinder (text);