const express = require("express")
const server = express()

//pegar o banco de dados 
const db = require("./database/db")

//configurar pasta publica 
server.use(express.static("public"))

//habilar o uso do req.body na nossa aplicação 
server.use(express.urlencoded({extended:true }))


//utilizando template engine 

const nunjucks = require("nunjucks")
const { response } = require("express")

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

    //req.query string 
    console.log(req.query)



    return res.render("create-point.html", {saved:true})
})

server.post("/savepoint", (req,res) =>{

    //req.body:o corpo do nosso formulario 
    //console.log(req.body)

    //inserir dados no banco de dados 
    const query =`
        INSERT INTO place (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?); 

    `

    const values = [
       req.body.image,
       req.body.name,
       req.body.address,
       req.body.address2,
       req.body.state,
       req.body.city,
       req.body.items,

    ]  

    function afterInsertData(err){
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", {saved:true})

    }


    db.run(query,values,afterInsertData)


    
})







server.get("/search", (req, res) => {


    db.all(`SELECT * FROM place`, function(err,rows){
        if(err) {
            return console.log(err)
        }

        console.log(rows)

        const total = rows.length



        return res.render("search-results.html", { place: rows, total:total})
         
    })  
})


//ligar o servidor 
server.listen(3000)