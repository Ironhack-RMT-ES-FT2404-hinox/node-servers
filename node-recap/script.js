console.log("probando ejecutar con node")


// ES5 syntax para importar modulos
// require("./data.js") // ejecuta todo lo que hay en data.js

const libros = require("./data.js") // ejecuta todo lo que hay en data.js y recibe algo que ese archive esté exportando
console.log("desde script.js", libros)


console.log(libros.book1.title)
console.log(libros.book2.title)


const { describirUnLibro } = require("./patata.js")
// import { useEffect } from "react"
console.log(describirUnLibro)

console.log( describirUnLibro(libros.book1) )
console.log( describirUnLibro(libros.book2) )

