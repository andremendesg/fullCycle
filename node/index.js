const express = require('express')

const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `delete from people`
connection.query(sql)
const sql1 = `insert into people (name) values ('Pedro')`
connection.query(sql1)
const sql2 = `insert into people (name) values ('Ana')`
connection.query(sql2)
const sql3 = `insert into people (name) values ('Maria')`
connection.query(sql3)
 const sql4 = `select name from people`

  let names = '- ';
    connection.query(sql4, function (err, result, fields) {

    if (err) throw err;
   
    
   
    for (let i = 0; i < result.length; i++) {
        names += result[i].name + ", ";
    }
  });
connection.end()
app.get('/', (req, res) => {
   
    //this.names = result;
     res.send('<h1>Full Cycle Rocks!</h1>' + names)
     


   
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})