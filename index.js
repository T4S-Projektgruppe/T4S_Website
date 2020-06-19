const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "t4sdb"
})

client.connect()
.then(() => console.log("Connected successfuly"))
.then(() => client.query("INSERT INTO FACH values($2, $3)", ['POS', 'Programmieren']))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())

