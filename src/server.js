const express = require("express")
const server = express()

//pegar o banco de dados 
const db = require("./database/db")

//configurar pasta publica 
server.use(express.static("public"))


//utilizando template engine 

const nunjucks = require("nunjucks")

nunjucks.configure("src/views", {
    express: server, 
    noCache: true
})

//configurar caminhos da minha aplicação
//pagina inicial 
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um título"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {


    db.all(`SELECT * FROM places`, function(err, rows){

        if(err) {
            return console.log(err)
        }

        console.log(rows)



        return res.render("search-results.html", {places: rows})
         
    })  
})

server.listen(3000)