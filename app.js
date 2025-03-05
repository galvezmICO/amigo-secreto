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

// Función para actualizar la lista visible de amigos en la página
function actualizarLista() {
    // 1. Obtener el elemento de la lista (ul) que mostrará los nombres
    const listaAmigos = document.getElementById("listaAmigos");
  
    // 2. Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";
  
    // 3. Recorrer el array 'amigos' y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
      const li = document.createElement("li");
      li.textContent = amigos[i];
      listaAmigos.appendChild(li);
    }
  }

// Función para sortear un amigo al azar
function sortearAmigo() {
    // 1. Validar que el array 'amigos' contenga al menos un nombre
    if (amigos.length === 0) {
      alert("Agrega al menos un amigo para sortear.");
      return;
    }
  
    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // 3. Obtener el nombre del amigo correspondiente al índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
  
    // 4. Mostrar el resultado en el elemento HTML con id "resultado"
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
  }
  