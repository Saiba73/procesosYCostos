//http://localhost:3000

const contenedor_objetos = document.querySelector("#contenedor_objetos");
const objeto_plantilla = document.querySelector(".objeto_plantilla");
const contador_de_objetos = document.querySelector("#contador_de_objetos");

sessionStorage.setItem("objetos", 0);

fetch("http://localhost:3000/")
  .then((recurso) => recurso.json())
  .then((respuesta) => {
    console.log(respuesta);
    for (i = 0; i < respuesta.objetos.length; i++) {
        sessionStorage.setItem(respuesta.objetos[i].id, 0)
      const clon = objeto_plantilla.cloneNode(true);
        
      clon.querySelector("img").src = respuesta.objetos[i].imagen;

      clon.querySelector(".objeto_titulo").innerHTML =
        respuesta.objetos[i].nombre;

      clon.querySelector(".objeto_descripcion").innerHTML = "<br>";

      clon.querySelector(".objeto_precio").innerHTML =
        "$" + respuesta.objetos[i].precio;

      const btn = clon.querySelector("input");
      btn.objeto_id = respuesta.objetos[i].id;

      btn.addEventListener("click", () => {
        let totalObjetos = parseInt(sessionStorage.getItem("objetos"));
        totalObjetos += 1;
        sessionStorage.setItem("objetos", totalObjetos.toString());

        let objeto = parseInt(sessionStorage.getItem(btn.objeto_id));
        objeto += 1
        sessionStorage.setItem(btn.objeto_id, objeto)

        if(sessionStorage.getItem("objetos") > 0){
            contador_de_objetos.style.display = "block"
            contador_de_objetos.innerHTML = sessionStorage.getItem("objetos")
        }
      })

      

      contenedor_objetos.appendChild(clon);
    }
    objeto_plantilla.remove();
  });
