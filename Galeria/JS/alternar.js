var imagenes = ['Imagenes/Fondo2.png', 'Imagenes/Fondo6.png', 'Imagenes/Fondo13.png', 'Imagenes/Fondo14.png', 'Imagenes/Fondo15.png','Imagenes/Fondo17.png','Imagenes/Fondo18.png','Imagenes/Fondo28.png','Imagenes/Fondo29.png', 'Imagenes/Freddie_Mercury.png'],

cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt==atras){
            if(cont>0){
                img.src = imagenes[cont - 1];
                cont--;
            }else if(cont==10){
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length-1;
            }
        }else if(tgt == adelante){
            if(cont < imagenes.length -1){
                img.src = imagenes[cont + 1];
                cont++;
            }else if(cont==0){
                img.src = imagenes[0];
                cont = 0;
            }
        }

    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');
    carrousel(contenedor);
})

function cambio ()
{
    alert("Perdon no hago nada :')")
}
  	

