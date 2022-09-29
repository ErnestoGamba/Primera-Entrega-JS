

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

let USER = 'nat';
function login() {
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {
        let ingresoUSER = prompt('ingresa tu usuario tenes ' + (i + 1) + ' oportunidades');
        if (ingresoUSER === USER) {
            alert('bienvenida ' + USER + '! ingreso exitoso');
            ingresar = true
            break;
        } else {
            alert('usuario no registrado')
        }
    }
    // for (let i = 0; i >= 0; i--) {
    //     let ingresoUSER = prompt('te estas por quedar sin pestañas')
    //     if (ingresoUSER === USER) {
    //         alert('bienvenida ' + USER + '! ingreso exitoso');
    //         ingresar = true;
    //         break;
    //     } else {
    //         alert('usuario no registrado')
    //     }
    // }

    return ingresar;
}
let ingreso = login()
if (ingreso) {
    let opciones = prompt('Bienvenida a Urania Lashes con que buscas hoy? \n1 Servicios \n2 Tienda \n3 Promos \n4 escribe Salir para salir');
    while (opciones != 'Salir') {
        switch (opciones) {
            case '1':
                let Servicios = prompt ('Aca te contamos un poco mas de que tratan nuestrios servicios \n1 Pestañas \n2 Uñas \n3 Cuidado Corporal \n4 escribe "Volver" para volver \n6 escribe "Salir" para salir ');
                while (Servicios != 'Volver'){
                switch (Servicios) {
                    case"1":
                    let Pestañas = prompt ('Te contamos como es cada Pestaña \n1 Volumen Ruso \n2 Pelo por Pelo \n3 Clasicas \n4 Lifting \n5 Efecto Rimel \n6 escribe "Volver" para volver \n7 escribe "Salir" para salir');
                    break;
                    case"2":
                    let Uñas = prompt ('Te contamos como es cada Uña \n1 Caping \n2 Esmaltado Semipermanente \n3 Soft Gel \n4 Esculpidas \n5 Acrilicas  \n6 escribe "Volver" para volver \n7 escribe "Salir" para salir');
                    break;
                    case"3":
                    let CuidadoCorporal = prompt ('Estos son nuestros Tratamientos Corporales \n1 Tratamiento Facial \n2 Tratamiento Corporal \n3 Masaje \n4 Inyeccion de Acido Ialuronico \n5 escribe "Volver" para volver \n6 escribe "Salir" para salir');
                    break;
                    case"Salir":
                    alert ('Gracias por Visitarnos!')
                    break;

                    default:
                        break;                   
                }
            }break;
            case '2':
                alert('aca no hay Tienda')
                break;
            case '3':
                alert('aca no hay Promos')
                break;

            default:
                break;
        } 
        opciones = prompt('Bienvenida a Urania Lashes con que buscas hoy? \n1 Servicios \n2 Tienda \n3 Promos \n4 escribe "Salir" para salir');       
    }
}