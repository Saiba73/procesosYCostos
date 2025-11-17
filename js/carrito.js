const Carrito = document.querySelector("#Carrito")
const articulo = document.querySelector(".articulo")
const cantidad_total = document.querySelector("#cantidad_total")

let objeto_1 = {
    id: 1,
    nombre: "Teflon",
    precio: 20
}

let objeto_2 = {
    id: 2,
    nombre: "Tuberia PVC - 6m",
    precio: 20
}

let objeto_3 = {
    id: 3,
    nombre: "Tinaco 450lts",
    precio: 6000
}

let objeto_4 = {
    id: 4,
    nombre: "Grifo",
    precio: 200
}

let objeto_5 = {
    id: 5,
    nombre: "Calentador de agua de paso",
    precio: 2215
}

let objeto_6 = {
    id: 6,
    nombre: "Pegamento PVC",
    precio: 20
}

total = 0

if(sessionStorage.getItem("1") != "0"){
    let articulo_1 = articulo.cloneNode(true)

    articulo_1.innerHTML = objeto_1.nombre +"  -  "+(objeto_1.precio*Number(sessionStorage.getItem("1")))
    Carrito.prepend(articulo_1)

    total += (objeto_1.precio*Number(sessionStorage.getItem("1")))

}

if(sessionStorage.getItem("2") != "0"){
    let articulo_2 = articulo.cloneNode(true)

    articulo_2.innerHTML = objeto_2.nombre +"  -  "+(objeto_2.precio*Number(sessionStorage.getItem("2")))
    Carrito.prepend(articulo_2)

    total += (objeto_2.precio*Number(sessionStorage.getItem("2")))

}

if(sessionStorage.getItem("3") != "0"){
    let articulo_3 = articulo.cloneNode(true)

    articulo_3.innerHTML = objeto_3.nombre +"  -  "+(objeto_3.precio*Number(sessionStorage.getItem("3")))
    Carrito.prepend(articulo_3)

    total += (objeto_3.precio*Number(sessionStorage.getItem("3")))

}

if(sessionStorage.getItem("4") != "0"){
    let articulo_4 = articulo.cloneNode(true)

    articulo_4.innerHTML = objeto_4.nombre +"  -  "+(objeto_4.precio*Number(sessionStorage.getItem("4")))
    Carrito.prepend(articulo_4)

    total += (objeto_4.precio*Number(sessionStorage.getItem("4")))

}

if(sessionStorage.getItem("5") != "0"){
    let articulo_5 = articulo.cloneNode(true)

    articulo_5.innerHTML = objeto_5.nombre +"  -  "+(objeto_5.precio*Number(sessionStorage.getItem("5")))
    Carrito.prepend(articulo_5)

    total += (objeto_5.precio*Number(sessionStorage.getItem("5")))

}

if(sessionStorage.getItem("6") != "0"){
    let articulo_6 = articulo.cloneNode(true)

    articulo_6.innerHTML = objeto_6.nombre +"  -  "+(objeto_5.precio*Number(sessionStorage.getItem("6")))
    Carrito.prepend(articulo_6)

    total += (objeto_6.precio*Number(sessionStorage.getItem("6")))

}


cantidad_total.innerHTML = "TOTAL $"+total