// 1. Creación del array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // 1. Obtener el elemento del input y capturar su valor (el input debe tener id="amigo")
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();
  
    // 2. Validar que el campo no esté vacío; si lo está, mostrar un alert.
    if (nombre === "") {
      alert("Por favor, inserte un nombre.");
      return;
    }
  
    // 3. Agregar el nombre al array 'amigos'
    amigos.push(nombre);
  
    // 4. Limpiar el campo de entrada
    inputAmigo.value = "";
  
    // 5. (Opcional) Actualizar la lista visible en la página.
    // Esto se hace llamando a la función actualizarLista, que implementaremos en el Commit 3.
    actualizarLista();
  }
  