$(document).ready(function() {
  console.log("¡jQuery cargado correctamente! 🎉");

  // =========================================
  // SECCIÓN 1: CAMBIAR TEXTO DE ELEMENTOS
 // =========================================
   // Array de textos para el cambio dinámico
    const textos = [
        '¡El texto ha cambiado con jQuery! 🎨',
        '¡jQuery hace la manipulación del DOM muy fácil! 🚀',
        '¡Sigue haciendo click para ver más textos! 💫'
    ];

    let indiceTexto = 0;

    $('#btn-cambiar-texto').click(function(){
      indiceTexto = (indiceTexto + 1) % textos.length;
      // es capturar el <p class="texto-demo">¡Haz clic en los botones para ver la magia de jQuery!</p>
      $('.texto-demo').text(textos[indiceTexto]);
    });

    // =========================================
    // SECCIÓN 2: CAMBIAR ESTILOS CSS
    // =========================================
    
    // Array de colores para el cambio dinámico
    // Esto es JavaScript puro, pero lo usaremos con jQuery
    const colores = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];

    let indiceColor = 0;
    $('#btn-cambiar-color').click(function(){
      indiceColor = (indiceColor + 1) % colores.length;
      $('#caja-demo').css('background', colores[indiceColor]);
    })
});