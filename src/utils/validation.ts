import { ObjectId } from "mongodb";

export interface BookData {
  titulo: string;
  autor: string;
  precio: number;
  stock: number;
}

export function parseBookData(
  argumentos: string[],
  posicionInicial: number
): BookData | null {
  const titulo = argumentos[posicionInicial];
  const autor = argumentos[posicionInicial + 1];
  const precioTexto = argumentos[posicionInicial + 2];
  const stockTexto = argumentos[posicionInicial + 3];

  if (
    !titulo ||
    !autor ||
    precioTexto === undefined ||
    stockTexto === undefined
  ) {
    console.log("Error: faltan datos del libro.");
    console.log(
      'Se requieren: "titulo" "autor" precio stock'
    );
    return null;
  }

  const precio = Number(precioTexto);
  const stock = Number(stockTexto);

  if (!Number.isFinite(precio) || precio < 0) {
    console.log("Error: el precio debe ser un número mayor o igual a 0.");
    return null;
  }

  if (!Number.isInteger(stock) || stock < 0) {
    console.log("Error: el stock debe ser un número entero mayor o igual a 0.");
    return null;
  }

  if (titulo.trim().length === 0 || autor.trim().length === 0) {
    console.log("Error: el título y el autor no pueden estar vacíos.");
    return null;
  }

  return {
    titulo: titulo.trim(),
    autor: autor.trim(),
    precio,
    stock,
  };
}

export function isValidObjectId(id: string | undefined): boolean {
  if (!id) {
    return false;
  }

  return ObjectId.isValid(id) && /^[a-fA-F0-9]{24}$/.test(id);
}