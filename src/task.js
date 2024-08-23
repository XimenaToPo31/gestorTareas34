//JSON es una forma de ver datos
// Las 2 rayas son como si no se hace esto (JSON), se hace esto (2 rayas, corchete)
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // (localStorage) Almacenamiento local que sirve para almacenar info importante en espacio del navegador. Guarda cosas con nombre, en este caso "tasks"

export const addTask = (task) => {
    const newTask = {
        id:Date.now(),
        text: task, 
        completed: false,
    };
    tasks.push(newTask);
    localStorage. setItem("tasks", JSON.stringify(tasks));
}; 

//Funcion para eliminar una tarea
export const deleteTask = (id) =>{
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//Funcion para actualizar la tarea
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
export const getTasks = () => tasks;