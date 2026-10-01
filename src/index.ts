import { closeDatabase, connectToDatabase } from "./database";
import { createBook } from "./commands/createBook";
import { readBooks } from "./commands/readBooks";
import { updateBook } from "./commands/updateBook";
import { deleteBook } from "./commands/deleteBook";


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
        
        case "read": {
          await readBooks(librosCollection);
          break;
        }
        
        case "update": {
          const id = argumentos[1];
          const titulo = argumentos[2];
          const autor = argumentos[3];
          const precio = Number(argumentos[4]);
          const stock = Number(argumentos[5]);

          await updateBook(
            librosCollection,
            id,
            titulo,
            autor,
            precio,
            stock
          );

          break;
        }
        
        case "delete": {
          const id = argumentos[1];

          await deleteBook(librosCollection, id);

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