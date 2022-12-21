

// function saludar(nombre, apellido){
//     let mensaje='hola bienvenido'
//     let nombreCompleto= nombre + ' ' + apellido;

//     // console.log ('hola muchacho');
//     // console.log(nombre + ' ' + apellido);

//     return mensaje + ' ' + nombreCompleto;
// }

// let saludo = saludar('jose' , 'gamba');

// console.log(saludo);
// console.log(saludar("mala", "persona"));

const USER = 'nat';
function login() {
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {
        let ingresoUSER = prompt('ingresa tu usuario tenes ' + (i + 1) + ' oportunidades');
        if (ingresoUSER === USER) {
            alert('bienvenida ' + USER + '! ingreso exitoso');
            ingresar = true
            break;
        } else {
            alert('usuario no registrado intente nuevamente')
        }
    }

    return ingresar;
}
function menuPrincipal() {
    let opciones = prompt('Bienvenida a Urania Lashes con que buscas hoy? \n1 Servicios \n2 Tienda \n3 para usar el concatenador de texto \n4 escribe "Salir" para salir');

    switch (opciones) {
        case '1':
            servicios2()
            break;
        case '2':
            tienda2()
            break; 
        case "3":
            concatenadorDeTexto ()     
            break ;     
        case 'Salir':
            bye ()
            break;
        default:
            alert("ingresa un dato correcto")
            menuPrincipal()
    }
}

function servicios2() {
    let Servicios = prompt('Aca te contamos un poco mas de que tratan nuestrios servicios \n1 Pestañas \n2 Uñas \n3 Cuidado Corporal \n4 escribe "Volver" para volver \n6 escribe "Salir" para salir ');
    switch (Servicios) {
        case "1":
            menuPestanias()
            break;
        case "2":
            menuUnias()
            break;
        case "3":
            menuTratCorporal ()            
            break;
        case "Volver":
            menuPrincipal()
            break;
        case "Salir":
            bye ()
            break;
        default:
            alert("ingresa un dato correcto")
            servicios2()
    }

}

function menuPestanias() {
    const pestanias = prompt('Te contamos como es cada Pestaña \n1 Volumen Ruso \n2 Pelo por Pelo \n3 Clasicas \n4 Lifting \n5 Efecto Rimel \n6 escribe "Volver" para volver \n7 escribe "Salir" para salir (por el momento no se puede acceder a los productos)');
    switch (pestanias) {
        case "Volver":
            servicios2()
            break;
        case "Salir":
            bye ()
            break;
        default:
            alert("por el momento solo podras salir o volver")
            menuPestanias()
            break;
    }
}

function menuUnias() {
    const Unias = prompt('Te contamos como es cada Uña \n1 Caping \n2 Esmaltado Semipermanente \n3 Soft Gel \n4 Esculpidas \n5 Acrilicas  \n6 escribe "Volver" para volver \n7 escribe "Salir" para salir');
    switch (Unias) {
        case "Volver":
            servicios2()
            break;
        case "Salir":
            bye ()
            break;
        default:
            alert("por el momento solo podras salir o volver")
            menuUnias()
            break;
    }
}

function menuTratCorporal (){
    const tratCorporal = prompt('Estos son nuestros Tratamientos Corporales \n1 Tratamiento Facial \n2 Tratamiento Corporal \n3 Masaje \n4 Inyeccion de Acido Ialuronico \n5 escribe "Volver" para volver \n6 escribe "Salir" para salir');
    switch (tratCorporal) {
        case "Volver":
            servicios2()
            break;
        case "Salir":
            bye ()
            break;
        default:
            alert("por el momento solo podras salir o volver")
            menuTratCorporal()
            break;
    }
}
function tienda2() {
    let tienda = prompt('aca no hay Tienda ingresa "Salir" para salir o "Volver" para volver')
    if (tienda === "Salir") {
        bye ()
    } else {
        if (tienda === "Volver") {
            menuPrincipal()
        } else {
            alert('Ingresa una opcion valida')
            tienda2()
        }
    }
}

function concatenadorDeTexto () {
    let txt1 = prompt("ingresa el texto a concatenar")
    let txt2 = prompt("ingresa la segunda parte de el texto a concatenar")
    alertconcatenadorDeTexto(txt1,txt2)
    menuPrincipal ()
}

function alertconcatenadorDeTexto (txt1,txt2){ alert("texto concatenado: " + txt1 + " " + txt2 )}  

function bye (){    
    alert("gracias por visitarnos")
}

let ingreso = login()
if (ingreso) {    
    menuPrincipal()
}

