import { Collection, ObjectId } from "mongodb";
import { Libro } from "../models/Libro";

export async function deleteBook(
  librosCollection: Collection<Libro>,
  id: string
): Promise<void> {
  const objectId = new ObjectId(id);

  const resultado = await librosCollection.deleteOne({
    _id: objectId,
  });

  if (resultado.deletedCount === 0) {
    console.log("No se encontró ningún libro con ese ID.");
    return;
  }

  console.log("Libro eliminado correctamente.");
}