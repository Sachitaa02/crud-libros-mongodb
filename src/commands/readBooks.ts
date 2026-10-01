import { Collection } from "mongodb";
import { Libro } from "../models/Libro";

export async function readBooks(
  librosCollection: Collection<Libro>
): Promise<void> {
  const libros = await librosCollection.find({}).toArray();

  if (libros.length === 0) {
    console.log("No hay libros almacenados.");
    return;
  }

  console.log("Libros almacenados:");

  libros.forEach((libro) => {
    console.log("------------------------------");
    console.log(`ID: ${libro._id}`);
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Precio: $${libro.precio}`);
    console.log(`Stock: ${libro.stock}`);
  });

  console.log("------------------------------");
}