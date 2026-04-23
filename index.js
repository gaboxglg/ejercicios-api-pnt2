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

await ejercicio1();
await ejercicio2();