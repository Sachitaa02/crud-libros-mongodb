import { closeDatabase, connectToDatabase } from "./database";
import { createBook } from "./commands/createBook";


async function main(): Promise<void> {
  try {
    const { librosCollection } = await connectToDatabase();

    const argumentos = process.argv.slice(2);
    const comando = argumentos[0];

    switch (comando) {
      case "create": {
        const titulo = argumentos[1];
        const autor = argumentos[2];
        const precio = Number(argumentos[3]);
        const stock = Number(argumentos[4]);

        await createBook(
          librosCollection,
          titulo,
          autor,
          precio,
          stock
        );

        break;
      }

      default:
        console.log("Comando no reconocido.");
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
  } finally {
    await closeDatabase();
  }
}

main();