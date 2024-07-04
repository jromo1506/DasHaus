// Obtener todos los elementos del menú
var menuItems = document.querySelectorAll('#menu-main-menu a');

// Iterar sobre cada elemento del menú
menuItems.forEach(function (menuItem) {
  // Agregar un event listener para el clic en cada elemento del menú
  menuItem.addEventListener('click', function (e) {
    e.preventDefault(); // Evitar el comportamiento predeterminado del enlace

    // Obtener el ID del objetivo al que se va a desplazar
    var targetId = menuItem.id.replace('paseras','Paseras')
                                .replace('navarra', 'Navarra')
                              .replace('privanzzas', 'privanzzas')
                              .replace('jesusMaria', 'jesusMaria')
                              .replace('rinconCampestre', 'campestre');

    // Obtener el elemento del objetivo
    var targetElement = document.getElementById('target_' + targetId);

    // Hacer el desplazamiento suave hacia el objetivo
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});