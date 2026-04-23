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
        // Filtramos usando ?userId=1 en la URL
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

await ejercicio1();
await ejercicio2();
await ejercicio3();
await ejercicio4();