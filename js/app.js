
window.addEventListener("scroll", function() {
   let nav = document.querySelector("nav");
   nav.classList.toggle("oscurecer", scrollY>0);
})

let cardProyecto = document.querySelector(".cardProyecto");



const proyectos = document.querySelectorAll(".cardProyecto");
proyectos.forEach((proyecto) => {
   proyecto.addEventListener("click", mostrarProyecto);
});

function mostrarProyecto(evento) {
   let id = evento.currentTarget.dataset.proyecto;
   let popup = document.querySelector("#" + id);
   popup.classList.add("mostrar");
   popup.addEventListener("click", () => {
      cerrarProyecto(id);
   });
}

function cerrarProyecto(id){
   let popup = document.querySelector("#" + id);
   popup.classList.remove("mostrar");
}



