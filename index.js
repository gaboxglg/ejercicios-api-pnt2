import axios from 'axios';

// --- EJERCICIO 1: Fetch ---
const ejercicio1 = async () => {
    try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        const datos = await respuesta.json();
        
        console.log("--- EJERCICIO 1: Rick & Morty ---");
        const primerosDiez = datos.results.slice(0, 10);
        
        primerosDiez.forEach((pj) => {
            console.log(`Personaje: ${pj.name}`);
        });
    } catch (error) {
        console.log("Error en Ejercicio 1:", error.message);
    }
};

// --- EJERCICIO 2: Axios DELETE ---
const ejercicio2 = async () => {
    try {
        console.log("\n--- EJERCICIO 2: Eliminar Post ---");
        const respuesta = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
        
        console.log("Status de la eliminación:", respuesta.status);
        console.log("Post eliminado correctamente (Simulado)");
    } catch (error) {
        console.log("Error en Ejercicio 2:", error.message);
    }
};
// --- EJERCICIO 3: Listar Álbumes de Fotos (Axios) ---
const ejercicio3 = async () => {
    try {
        console.log("\n--- EJERCICIO 3: Álbumes Usuario 1 ---");
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums?userId=1");
        
        // Axios nos da los datos en .data
        res.data.forEach(album => {
            console.log(`ID: ${album.id} | Título: ${album.title}`);
        });
    } catch (error) {
        console.log("Error en Ejercicio 3:", error.message);
    }
};

// --- EJERCICIO 4: Mostrar Información de Usuario 5 (Fetch) ---
const ejercicio4 = async () => {
    try {
        console.log("\n--- EJERCICIO 4: Info Usuario ID 5 ---");
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/5");
        const usuario = await respuesta.json();
        
        // Accedemos a propiedades específicas del objeto
        console.log(`Nombre: ${usuario.name}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Ciudad: ${usuario.address.city}`);
    } catch (error) {
        console.log("Error en Ejercicio 4:", error.message);
    }
};
// --- EJERCICIO 5: Eliminar un To-Do (Axios) ---
const ejercicio5 = async () => {
    try {
        console.log("\n--- EJERCICIO 5: Eliminar To-Do ID 1 ---");
        // Usamos el método DELETE sobre un ID específico
        const respuesta = await axios.delete("https://jsonplaceholder.typicode.com/todos/1");
        
        console.log("Confirmación de lo eliminado. Status:", respuesta.status);
    } catch (error) {
        console.log("Error en Ejercicio 5:", error.message);
    }
};

// --- EJERCICIO 6: Mostrar Comentarios de un Post (Fetch) ---
const ejercicio6 = async () => {
    try {
        console.log("\n--- EJERCICIO 6: Comentarios del Post ID 2 ---");
        // Traemos comentarios filtrados por el Post 2
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/comments?postId=2");
        const comentarios = await respuesta.json();
        
        console.log(`Se encontraron ${comentarios.length} comentarios.`);
        comentarios.slice(0, 3).forEach(c => {
            console.log(`- De: ${c.email} | Comentario: ${c.body.substring(0, 40)}...`);
        });
    } catch (error) {
        console.log("Error en Ejercicio 6:", error.message);
    }
};

// --- EJERCICIO 7: Eliminar una Foto (Fetch) ---
const ejercicio7 = async () => {
    try {
        console.log("\n--- EJERCICIO 7: Eliminar Foto ID 1 ---");

        const respuesta = await fetch("https://jsonplaceholder.typicode.com/photos/1", {
            method: 'DELETE'
        });
        
        console.log("Status de eliminación de foto:", respuesta.status);
    } catch (error) {
        console.log("Error en Ejercicio 7:", error.message);
    }
};

// --- EJERCICIO 8: Mostrar Datos del Clima (Axios) ---
const ejercicio8 = async (ciudad) => {
    try {
        console.log(`\n--- EJERCICIO 8: Clima en ${ciudad} ---`);
    
        const apiKey = "TU_API_KEY_ACA"; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;
        
        console.log("Buscando clima... (Simulado porque necesitamos API Key)");
        
    } catch (error) {
        console.log("Error en Ejercicio 8:", error.message);
    }
};

await ejercicio1();
await ejercicio2();
await ejercicio3();
await ejercicio4();
await ejercicio5();
await ejercicio6();
await ejercicio7();
await ejercicio8("Buenos Aires");