import { closeDatabase, connectToDatabase } from "./database";
import { createBook } from "./commands/createBook";
import { readBooks } from "./commands/readBooks";
import { updateBook } from "./commands/updateBook";
import { deleteBook } from "./commands/deleteBook";
import {
  isValidObjectId,
  parseBookData,
} from "./utils/validation";

async function main(): Promise<void> {
  try {
    const { librosCollection } = await connectToDatabase();

    const argumentos = process.argv.slice(2);
    const comando = argumentos[0];

    switch (comando) {
      case "create": {
        const datos = parseBookData(argumentos, 1);

        if (!datos) {
          break;
        }

        await createBook(
          librosCollection,
          datos.titulo,
          datos.autor,
          datos.precio,
          datos.stock
        );

        break;
      }

      case "read": {
        await readBooks(librosCollection);
        break;
      }

      case "update": {
        const id = argumentos[1];

        if (!isValidObjectId(id)) {
          console.log("Error: el ObjectId ingresado no es válido.");
          break;
        }

        const datos = parseBookData(argumentos, 2);

        if (!datos) {
          break;
        }

        await updateBook(
          librosCollection,
          id,
          datos.titulo,
          datos.autor,
          datos.precio,
          datos.stock
        );

        break;
      }

      case "delete": {
        const id = argumentos[1];

        if (!isValidObjectId(id)) {
          console.log("Error: el ObjectId ingresado no es válido.");
          break;
        }

        await deleteBook(librosCollection, id);

        break;
      }

      default:
        console.log("Comando no reconocido.");
        console.log("");
        console.log("Comandos disponibles:");
        console.log(
          'create "titulo" "autor" precio stock'
        );
        console.log("read");
        console.log(
          'update ID "titulo" "autor" precio stock'
        );
        console.log("delete ID");
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
  } finally {
    await closeDatabase();
  }
}

main();