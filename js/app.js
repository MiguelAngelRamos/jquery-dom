$(document).ready(function() {
  console.log("¡jQuery cargado correctamente! 🎉");

   // Array de textos para el cambio dinámico
    const textos = [
        '¡El texto ha cambiado con jQuery! 🎨',
        '¡jQuery hace la manipulación del DOM muy fácil! 🚀',
        '¡Sigue haciendo click para ver más textos! 💫'
    ];
    // De esta manera se accede a los elementos del array
    textos[0]; // ¡El texto ha cambiado con jQuery! 🎨
    textos[1]; // ¡jQuery hace la manipulación del DOM muy fácil! 🚀
    textos[2]; // ¡Sigue haciendo click para ver más textos! 💫

    let indiceTexto = 0;

    $('#btn-cambiar-texto').click(function(){
      indiceTexto = (indiceTexto + 1);
      // es capturar el <p class="texto-demo">¡Haz clic en los botones para ver la magia de jQuery!</p>
      $('.texto-demo').text(textos[indiceTexto]);
      console.log(indiceTexto);

    });

});