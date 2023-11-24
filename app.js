// Selecciona el elemento input con el id "progress-bar"
const inputRange = document.getElementById("progress-bar");

// Selecciona los elementos donde se mostrará la cantidad usada y la cantidad restante
const storageUsed = document.getElementById("storage-used-number");
const storageLeft = document.getElementById("number");

// Agrega un evento de escucha al input range para actualizar los valores y el color en carga inicial
window.addEventListener('load', () => {
  // Obtiene el valor actual del input range como un entero
  const usedValue = parseInt(inputRange.value);
  
  // Actualiza el contenido de los elementos HTML con los valores usados y restantes
  storageUsed.innerText = usedValue;
  storageLeft.innerText = 1000 - usedValue;

  // Llama a la función para actualizar el color del rango
  updateRangeColor();
});

// Agrega un evento de escucha al input range para actualizar los valores y el color
inputRange.addEventListener("input", () => {
  // Obtiene el valor actual del input range como un entero
  const usedValue = parseInt(inputRange.value);
  
  // Actualiza el contenido de los elementos HTML con los valores usados y restantes
  storageUsed.innerText = usedValue;
  storageLeft.innerText = 1000 - usedValue;

  // Llama a la función para actualizar el color del rango
  updateRangeColor();
});

// Función para actualizar el color del rango
function updateRangeColor() {
  // Calcula el porcentaje del valor actual en relación con el valor máximo y redondea el resultado
  const percent = Math.round((inputRange.value / inputRange.getAttribute('max')) * 100);

  // Actualiza el estilo de fondo del input range con un gradiente lineal
  inputRange.style.background = `linear-gradient(to right, 
    hsl(6, 100%, 80%) 0%, 
    hsl(335, 100%, 65%) ${percent}%, 
    hsl(229, 57%, 11%) ${percent}%, 
    hsl(229, 57%, 11%) 100%)`;
}


