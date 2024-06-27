//Esto es mi tarea de EBAC. En este me pidieron diseñar una base de datos donde los alumnos puedan registrarse, eliminar o ver su registro.
//no está completo, ya que solo pone en el registro a los que ya están agregados desde aquí mismo.
//Puedes agregarlos desde el INDEX, pero no quedan guardados para siempre, sólo hasta que se actualice.
//Está así por que hasta ahí he llegado del curso, sólo falta poner el comando para que queden registrado de forma permanente. 


//Imprime un mensaje de bienvenida en la consola
console.log("Sistema EBAC de Registro de Alumnos");
console.log("");

//Se define un arreglo de registro con datos de alumnos en EBAC. 
var registro = [

    //Se muestra lista de alumnos por medio de objetos
    {nombre: "Yael Chavarría", edad: "30", zonaResidencia: "Cozumel", nombrePrograma: "IT para Principiantes", email:"y.chavarria@protonmail.com", númeroTeléfono: "5533237300", númeroSeguro: true},
    {nombre: "María Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollo Back End con Python", email:"maria@protonmail.com", númeroTeléfono: "5588997722", númeroSeguro: false},
    {nombre: "Raul Hernández", edad: "35", zonaResidencia: "Oaxaca", nombrePrograma: "Diseñador UX/UI", email:"Raul@protonmail.com", númeroTeléfono: "5588997726", númeroSeguro: false},
    {nombre: "Paulina Sánchez", edad: "22", zonaResidencia: "Michoacán", nombrePrograma: "Diseñador Full Stack Java", email:"Paulina@protonmail.com", númeroTeléfono: "5588997729", númeroSeguro: true},
    {nombre: "Renato Salgao", edad: "34", zonaResidencia: "Curazao", nombrePrograma: "Diseñador Gráfico", email:"Renato@protonmail.com", númeroTeléfono: "5588997725", númeroSeguro: true},
];
 
//Función que permite agregar un nuevo alumno al arreglo de registro
function agregarAlumno(){

    //Se le solicita información al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno"); 
    var edad = prompt("ingresa edad");
    var nombrePrograma = prompt("ingresa programa a estudiar");
    var email = prompt("ingresa correo electrónico");
    var númeroTeléfono = prompt("ingresa número de teléfono");
    var númeroSeguroSocial = prompt("¿Cuéntas con Seguro Social? (s/n)");

//Esto no es tan imporante, fue parte del ejercicio. En caso de que en la página decidieran poner sí o no, quedaría registrado como
//true o false. 
    if(númeroSeguroSocial === "s"){
        númeroSeguroSocial = true;
    }
    else{
         númeroSeguroSocial = false;
    }
        

    // Crea un ubjeto que se llama nuevoAlumno con los datos ingresados
    var nuevoAlumno = {nombre: nombre, zonaResidencia: zonaResidencia, edad: edad, nombrePrograma: nombrePrograma, email: email, númeroTeléfono: númeroTeléfono, númeroSeguro: númeroSeguroSocial};


    //Agrega la información nuevoAlumno al arreglo
    registro.push(nuevoAlumno);

}

//Función para consultar los registros de los alumnos
function consultarRegistros(){

    //Este ciclo for itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length; i++){

        //Esta lista de console.log permite ver al usario el registro en la consola
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
        console.log("Número de teléfono: " + registro[i].númeroTeléfono);
        console.log("Número de seguro social: " + registro[i].númeroSeguro);
        console.log("____________________________________________________"); 
    }; 
}

 

   
//Esta función permite generar un nuevo arreglo que no contenga la información del alumno deseado
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreEliminar = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreEliminar);
}


//Ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición
do{

    //Variable que toma la elección del usuario para ejecutar la función indicada
    var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de los alumnos \n3. Eliminación registro de alumno \n4. salir");

    //Se declara este if para dar a elegir al usuario la opción que quiera

    if (opcion === "1"){
        agregarAlumno();
    } else if(opcion === "2"){
    consultarRegistros();
    } else if(opcion === "3"){
        eliminarAlumno();
    } else if ("Salida"){
        alert ("Salir del sistema");
    } else {
        alert ("Opción no válida, elige otra");  
    }

    //Esta variable nos permite elegir si hacemos otra acción o cerramos el ciclo

    var continuar = prompt("¿Deseas hacer otra acción? (S/N)");

    //While que se encarga de cerrar el ciclo
}   while(continuar === "s");
 


    


//Ejercicio 2:  
 //if(registro[i].númeroSeguro.includes("775", 0)){
   //console.log("Número de seguro social correcto: " + registro[i].númeroSeguro);
//}
// else{
  //  console.log("Número de seguro social incorrecto: " + registro[i].númeroSeguro);

 //}



 //if(númeroSeguroSocial.includes("775", 0)){
    //console.log("Número de seguro social correcto: " );
 //}
  //else{
   //  console.log("Número de seguro social incorrecto: ");
 
 //}

// ejercicio 3
  //  console.log("Edad: " + registro[2].edad);
 


