const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

db.serialize(()=> {

    //com commandos SQL eu vou:

    //1criar uma tabela 
    db.run(`
      CREATE A TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          image TEXT,
          name TEXT,
          address TEXT,
          address2 TEXT,
          state TEXT,
          city TEXT,
          items TEXT
      );

    `)

    //2 inserir dados na tabela 
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
        "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "Colectoria",
        "Guilherme Gnballa, Jardim América",
        "N 260",
        "Santa Catarina",
        "Rio sul",
        "Resíduos Eletrônicos, lâmpadas"
    ] 
    db.run(query,values,function(){

    })


    //3 consultar os dados da tabela 
})