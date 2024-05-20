require('dotenv').config()
const express = require('express')
const app = express()

// sección de configuraciones de nuestro servidor
const morgan = require("morgan")
app.use( morgan("dev") )

// indicamos al servidor donde está todos los archivos estaticos (css, imagenes, videos, audios, js)
app.use( express.static("public") )
// de ahora en adelante, cada vez que necesitemos acceder a estos archivos, se asume que empezamos desde /public

let data = [
  {
    id: "abc",
    title: "dune",
    author: "frank herbert"
  },
  {
    id: "def",
    title: "lord of the rings",
    author: "Tolkien"
  },
  {
    id: "ghi",
    title: "harry potter",
    author: "JK Rowling"
  },
]

// creamos un middleware => funcion que siempre se va a ejecutar, sin emportar la ruta que esté llamando el cliente.
app.use((req, res, next) => {
  // esto siempre se va a ejecutar
  // console.log("esto siempre se va a ejecutar")

  // Para analizar comportamientos de usuario
  // authorizacion 
  // checkeos de errors

  // next significa continua con las condiciones de rutas siguientes
  next()
})

app.get('/', (req, res) => {
  res.send('Bienvenidos a la base de mi API con patatas')
})

app.get("/patata", (req, res) => {
  res.send(`Aqui tienes una patata, gracias por contactarnos. La palabra secreta es: ${process.env.PALABRA_SECRETA}`)
})

app.get("/friends/all", (req, res) => {
  res.send("Aqui tienes la lista de todos tus amigos")
})

app.get("/libros", (req, res) => {
  res.json(data) // se usa para enviar data en formato json
})

app.get("/libros/random", (req, res) => {

  // queremos enviar un libro aleatorio al cliente
  const randomIndex = Math.floor( Math.random() * data.length )
  const randomBook = data[randomIndex]
  console.log(randomBook)

  res.json(randomBook)

})


app.get("/home", (req, res) => {
  // quiero enviar un archivo de html al cliente
  console.log(__dirname) // la raiz de donde está ubicado este repositorio
  res.sendFile(__dirname + "/views/index.html") // dirección absoluta del archivo a enviar
})

app.get("/about", (req, res) => {

  res.sendFile(__dirname + "/views/about.html")

})


// siempre deberia estar al final
const port = process.env.PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})