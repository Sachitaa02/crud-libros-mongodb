# CRUD de Libros con MongoDB

Aplicación de consola desarrollada en TypeScript que permite administrar una coleccion de libros utilizando MongoDB.

El proyecto implementa las operaciones CRUD:

- Crear libros
- Listar libros
- Actualizar libros por ObjectId
- Eliminar libros por ObjectId

## Tecnologias usadas

- Node.js
- TypeScript
- MongoDB
- Driver oficial `mongodb`
- Git y GitHub

## Base de datos

La aplicación utiliza:

- Base de datos: `biblioteca`
- Colección: `libros`

Cada libro contiene los siguientes campos:

- `titulo`
- `autor`
- `precio`
- `stock`

MongoDB genera automáticamente un campo `_id` de tipo `ObjectId` para cada documento.

## Estructura del proyecto

```text
src/
├── commands/
│   ├── createBook.ts
│   ├── readBooks.ts
│   ├── updateBook.ts
│   └── deleteBook.ts
├── models/
│   └── Libro.ts
├── utils/
│   └── validation.ts
├── database.ts
└── index.ts
```
