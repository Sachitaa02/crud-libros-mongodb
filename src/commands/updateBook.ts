import { Collection, ObjectId } from "mongodb";
import { Libro } from "../models/Libro";

export async function updateBook(
  librosCollection: Collection<Libro>,
  id: string,
  titulo: string,
  autor: string,
  precio: number,
  stock: number
): Promise<void> {
  const objectId = new ObjectId(id);

  const resultado = await librosCollection.updateOne(
    { _id: objectId },
    {
      $set: {
        titulo,
        autor,
        precio,
        stock,
      },
    }
  );

  if (resultado.matchedCount === 0) {
    console.log("No se encontró ningún libro con ese ID.");
    return;
  }

  const libroActualizado = await librosCollection.findOne({
    _id: objectId,
  });

  console.log("Libro actualizado correctamente.");

  if (libroActualizado) {
    console.log("------------------------------");
    console.log(`ID: ${libroActualizado._id}`);
    console.log(`Título: ${libroActualizado.titulo}`);
    console.log(`Autor: ${libroActualizado.autor}`);
    console.log(`Precio: $${libroActualizado.precio}`);
    console.log(`Stock: ${libroActualizado.stock}`);
    console.log("------------------------------");
  }
}