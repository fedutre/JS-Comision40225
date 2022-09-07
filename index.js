let nombreUsuario
let edadUsuario
let deporteElegido
let horarioElegido
let desicion
let resultado = 0;
const opcionBebida = ["isotonica" , "Cerveza" , "Agua" , "Agua saborizada"] 

alert("Bienvenido al gestor de horas de Multideportes, Espacio deportivo")
nombreUsuario = prompt("Ingrese su nombre y Apellido")
alert("Bienvenido" + " " + nombreUsuario)

edadUsuario = parseInt(prompt("Ingrese su edad"))

if(edadUsuario >=18){
    alert("Eres mayor de edad, a continuación podras elegir el deporte")
    deporteElegido = prompt("¿Tu deporte es Futbol, Tenis o Padel?") 

    if(deporteElegido === "Futbol"){
        alert("Elegiste Futbol")
    }else if(deporteElegido === "Tenis"){
        alert("Elegiste Tenis")
    }else if(deporteElegido === "Padel"){
        alert("Elegiste Padel")
    }else{
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
        resultado = numero1 * 1200
        alert("El monto total a abonar es de $" + " " + resultado)
    }
    multiplicar()

    function calcularLuz(resultado){
        const luz = 500
        return resultado + luz
    }
    alert("Su valor con luz es $" + calcularLuz(resultado))

    const bebidas =[
        {Nombre:"Bebida isotonica", precio: 350},
        {Nombre:"Cerveza", precio: 500},
        {Nombre:"Agua", precio: 250},
        {Nombre:"Agua saborizada", precio: 400},
        {Nombre:"Gaseosa", precio: 450},
        ];

let carrito =[]

let opcionBebida = prompt("Indique si desea bebidas, Elija si o no")
while(opcionBebida != "si" && opcionBebida != "no"){
    alert("Solo debes indicar SI o NO")
    opcionBebida = prompt("Indica si necesitas bebidas")
}
if (opcionBebida =="si"){
    alert("A continuacion nuestra lista de bebidas para que selecciones")
    let todaslasBebidas = bebidas.map(
        (bebidas) => bebidas.Nombre + " " + bebidas.precio + "$"
    );
    alert(todaslasBebidas.join(" - "))
}else if(opcionBebida=="no"){
    alert("En la cancha podras elegir tambien si deseas cambiar de opinión")
}

while(opcionBebida != "no"){
    let bebida = prompt("Agrega la bebida que deseas")
    let precio = 0

    if(bebida == "bebida isotonica" || bebida == "cerveza" || bebida == "agua" || bebida == "agua saborizada" || bebida == "gaseosa"){
        switch(bebida){
            case "bebida isotonica":
                precio = 350;
                break;
            case "cerveza":
                precio = 500;
                break;
            case "agua":
                precio = 250;
                break;
            case "agua saborizada":
                precio = 400;
                break;
            case "gaseosa":
                precio = 450;
                break;
            default:
                break;
        }
    let cantidad = parseInt(prompt("¿Cuantas unidades desea?"))

    carrito.push({bebida, cantidad, precio})
    console.log(carrito)
    }else {
        alert("No tenemos ese producto")
    }
    opcionBebida = prompt("¿Desea adquirir alguna bebida mas?")
    while(opcionBebida == "no"){
        alert("Gracias por adquirir su bebida")
        carrito.forEach((carritoFinal) =>{
        alert(`Bebidas elegidas: ${carritoFinal.bebida}, Unidades: ${carritoFinal.cantidad}, Total a pagar de bebidas ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad,0)
alert(`el total a pagar por el alquiler y la bebida es: ${total + calcularLuz(resultado)}`)


}else{
    alert("No puedes sacar turno por que eres menor de edad")
}
