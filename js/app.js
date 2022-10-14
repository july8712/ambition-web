console.log('PASE POR ACA');

window.addEventListener('load',
{}
)

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


// ======= SWIPER TEXT PART =======

const swiperMod = document.querySelector('.swiperMod')
const style = getComputedStyle(swiperMod);



let index 
let positionY 
let positionX  

function getIndex(){
   index = style.zIndex
   return index
}




setInterval(() => {
   const matrix = new WebKitCSSMatrix(style.transform);
   // transform: matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)

   function getPositionY(){
      positionY = matrix.m41
      return positionY
   }
   
   function getPositionX(){
      positionX = matrix.m43
      return positionX
   }

   let swiperText1 = document.querySelector('#slide-1')
   let swiperText2 = document.querySelector('#slide-2')
   let swiperText3 = document.querySelector('#slide-3')
 
 
   getIndex();
   getPositionY();
   getPositionX();

  console.log( getIndex());
  console.log(getPositionY());
  console.log(getPositionX());

   console.log(swiperText1)

  
   console.log('INDEX', index)
   if( index === -5 ){

      swiperText1.classList.add('slide-active')


   }



}, 500)



/* 

index 1 : 1 0 0 showing
index 1: -5 -1200 480 showing 

index 2 compu : -1 -400 160

index 3 colores: -3 -800 320
index 3 colores: -1 -400 -160

*/
