results = document.getElementById("outputWindow");

/*EXERCICI 1*/

button1 = document.getElementById('exercici1');
button1.addEventListener("click", myName);

function myName(){
    results.innerText =""; //borrar el contenido anterior cada vez que pulso cada botón
    let myName = ['C','L','A','R','A'];

    for (i = 0; i< myName.length; i++){
        console.log(myName[i]);
        results.innerText += myName[i];
    }
}

/*EXERCICI 2*/

button2 = document.getElementById('exercici2');
button2.addEventListener("click", spellName);

function spellName(){
    results.innerText = "";
    let myName = ['C','L', 4 ,'R','A'];

    for (i = 0; i< myName.length; i++){
     if(myName[i] == "A" || myName[i] == "E" || myName[i] == "I"|| myName[i] == "O"|| myName[i] == "U"){
        text = "\n He trobat la VOCAL " + myName[i];
        console.log(text);
        results.innerText += text;
        }
     else if(typeof myName[i] == 'number'){
        text = "\n Els noms no contenen el número: "+ myName[i];
        console.log(text);
        results.innerText += text;
     }
        else{
        text = "\n He trobat la CONSONANT " +myName[i];
        console.log(text);
        results.innerText += text;
     }
}
}


/*EXERCICI 3*/
button3 = document.getElementById('exercici3');
button3.addEventListener("click", mapName);

function mapName(){
    results.innerText = "";
    let mapaNombre = {C:1, L:1, A:2, R:1} ;
    
    console.log(Object.entries(mapaNombre));
    results.innerText = Object.entries(mapaNombre);
}

/*EXERCICI 4*/
button4 = document.getElementById('exercici4');
button4.addEventListener("click", nameSurname);

function nameSurname (){
    results.innerText = "";
    let array_name = ['C','L','A','R','A'];
    let array_surname = ['A', 'L', 'E', 'R'];
    let length_surname = array_surname.length;
    array_name.push(" "); //espacio entre el nombre y apellido

    for (i = 0; i<length_surname; i ++ ){
        let element = array_surname[i];
        array_name.push(element);
    }
    results.innerText = array_name;
    console.log(array_name);
}

/* EMAIL FINDER */
button5 = document.getElementById('exercici5');
button5.addEventListener("click", emailFinder);

function emailFinder(){
    results.innerText = "";
    let inputText= prompt("Introdueixi el text per extreure els emails");
    const email = /[ñÑ\w+-]+(?=@)@(?<=@)[ñÑ\w+-]+\.(?<=\.)[ñÑ\w+-]+/g;
    let match;
    let emailList = [];

    while ((match = email.exec(inputText)) !== null){
        emailList.push(match[0]);
    }
    console.log(emailList);
    for (i = 0; i< emailList.length; i++){
        text ="\n" + emailList[i];
        results.innerText += text;
    }

}

//text = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email"
