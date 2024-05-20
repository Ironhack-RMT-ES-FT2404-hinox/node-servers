console.log("console.log desde data.js")

const book1 = {
  title: "El Señor de los Anillos",
  author: "Tolkien"
}
console.log("desde data.js", book1)
// ES5 syntax para exportar modulos

const book2 = {
  title: "Harry Potter",
  author: "JK Rowling"
}

// module.exports = [book1, book2]
module.exports = {
  book1, // => book1: book1
  book2  // => book2: book2
}

// yo no puedo ejecutar multiples module.exports