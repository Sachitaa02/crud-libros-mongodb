import { closeDatabase, connectToDatabase } from "./database";

async function main(): Promise<void> {
  try {
    await connectToDatabase();

    console.log("Conexión a MongoDB realizada correctamente.");
    console.log("Base de datos: biblioteca");
    console.log("Colección: libros");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
  } finally {
    await closeDatabase();
  }
}

main();