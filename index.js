let nombreUsuario
let edadUsuario
let deporteElegido
let horarioElegido
let desicion

alert("Bienvenido al gestor de horas de Multideportes, Espacio deportivo")
nombreUsuario = prompt("Ingrese su nombre y Apellido")
    alert("Bienvenido" + " " + nombreUsuario)

edadUsuario = prompt("Elige: 1: Soy mayor de edad - 2: Soy menor de edad")
    while(edadUsuario !="1" && edadUsuario != "2")
    
        switch(edadUsuario){
            case"1":
                alert("Eres mayor de edad")
                break
        }
    
        switch(edadUsuario){

            default:
            alert("No tienes permitido realizar reservas")
            break
        }

deporteElegido = prompt("¿Tu deporte es Futbol, Tenis o Padel?")    
    if(deporteElegido === "Futbol")
        alert("Elegiste Futbol")
    else if(deporteElegido === "Tenis")
        alert("Elegiste Tenis")
    else if(deporteElegido === "Padel")
        alert("Elegiste Padel")
    else{
deporteElegido = prompt("Tienes que elegir un deporte valido")
}

    alert("Ahora indica el horario que necesitas")

horarioElegido = prompt("Horarios disponibles. 19hs , 20hs, 21hs, 22 hs, 23hs")

    while(horarioElegido != "19hs" && horarioElegido != "20hs" && horarioElegido != "21hs" && horarioElegido != "22hs" && horarioElegido != "23hs"){

        switch(horarioElegido){
            case "19hs":
                alert("Elegiste 19 hs")
            break

            case "20hs":
                alert("Elegiste 20 hs")
            break

            case "21hs":
            alert("Elegiste 21 hs")
            break

            case "22hs":
            alert("Elegiste 22 hs")
            break

            case "23hs":
            alert("Elegiste 23 hs")
            break

            default:    
            alert("No elegiste un horario disponible")
            break

        }
    
        horarioElegido = prompt("Por favor escriba un horario válido")
    
    }
    
    alert(nombreUsuario + " " + "Elegiste" + " " + deporteElegido + " " + "en el horario de las" + " " + horarioElegido)

function multiplicar() {
    const numero1 = parseInt(prompt("Cuantas horas desee alquilar"))
    alert("El costo de la hora por cancha es de $1200")
    const resultado = numero1 * 1200
    alert("El monto total a abonar es de $" + " " + resultado)
}
    multiplicar()

function calcularLuz(resultado){
    const Luz = 500
    return resultado + Luz
}
    calcularLuz()
