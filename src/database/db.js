const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// db.serialize(()=> {

//     //com commandos SQL eu vou:

//     //1criar uma tabela 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS place (
//           id INTEGER PRIMARY KEY AUTOINCREMENT,
//           image TEXT,
//           name TEXT,
//           address TEXT,
//           address2 TEXT,
//           state TEXT,
//           city TEXT,
//           items TEXT
//         );

//     `)

//     //2 inserir dados na tabela 
    
    // const query =`
    //     INSERT INTO place (
    //         image,
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?); 

    // `

    // const values = [
    //     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    //     "Papersider",
    //     "Guilherme Gnballa, Jardim América",
    //     "N 260",
    //     "Santa Catarina",
    //     "Rio sul",
    //     "Resíduos Eletrônicos, lâmpadas"
    // ]  

    // function afterInsertData(err){
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)

    // }


    // db.run(query,values,afterInsertData)

   

//     //3 consultar os dados da tabela 

//     db.all(`SELECT name FROM place`, function(err, rows){
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })

//     // 4 deletar um dado da tabela 
    // db.run(`DELETE FROM place WHERE id <> ?`, [2], function(err){
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })

// })