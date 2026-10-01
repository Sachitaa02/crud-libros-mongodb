import { Collection } from "mongodb";
import { Libro } from "../models/Libro";

export async function createBook(
  librosCollection: Collection<Libro>,
  titulo: string,
  autor: string,
  precio: number,
  stock: number
): Promise<void> {
  const nuevoLibro: Libro = {
    titulo,
    autor,
    precio,
    stock,
  };

  const resultado = await librosCollection.insertOne(nuevoLibro);

  console.log("Libro creado correctamente.");
  console.log(`ID: ${resultado.insertedId}`);
}