let productos = []
const selecTag = document.getElementById('lista')

const cocaCola = {
    id: 1,
    nombre: 'Coca Cola',
    precio: 250,
}
productos.push(cocaCola)

const fanta = {
    id: 2,
    nombre: 'Fanta',
    precio: 200,
}
productos.push(fanta)
const pasoToros = {
    id: 3,
    nombre: 'Paso de los Toros',
    precio: 180,
}
productos.push(pasoToros)
const schweppes = {
    id: 4,
    nombre: 'schweppes',
    precio: 280,
}
productos.push(schweppes)

productos.forEach(productos=>{
    const option = document.createElement("option")
    option.innerText = `${productos.nombre}: ${productos.precio}`
    selecTag.append(option)

})
