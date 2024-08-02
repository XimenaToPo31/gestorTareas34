//JSON es una forma de ver datos
// Las 2 rayas son como si no se hace esto (JSON), se hace esto (2 rayas, corchete)
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // (localStorage) Almacenamiento local que sirve para almacenar info importante en espacio del navegador. Guarda cosas con nombre, en este caso "tasks"
