
// const school_client = new Client({
//     user: "?",
//     password: "?",
//     host: "?",
//     port: 0,
//     database: "?"
// })
const { Client } = require('pg')

function connect(){
    t4sdb_client.connect();
    console.log("connected successfully");
}
const t4sdb_client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "t4sdb"
})
try {
    function getAllStudents() {
        return t4sdb_client.query("SELECT * FROM schueler")
    }
    function getAllSubjects() {
        return t4sdb_client.query("SELECT * FROM fach")
    }
    function getStudent(id) {
        return t4sdb_client.query("SELECT * FROM schueler WHERE schueler_id = " + id );
    }
    function disconnect() {
        t4sdb_client.end();
    }
    function insertSubject(kuerzel, bezeichnung) {
        return t4sdb_client.query("INSERT INTO FACH(fachkuerzel, fachbezeichnung) values($1, $2)", [kuerzel, bezeichnung])
    } 
    function insertStudent(vname, nname, kuerzel, klasse, abteilung_id) {
        return t4sdb_client.query("INSERT INTO schueler values( $1, $2, $3, $4, $5)",
            vname, nname, kuerzel, klasse, abteilung_id)
    }    
} catch (error) {
    console.log("something went wrong", error)
}

module.exports = {getAllStudents, getAllSubjects, connect, disconnect, getStudent, insertStudent, insertSubject};


