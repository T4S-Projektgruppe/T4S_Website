
// const school_client = new Client({
//     user: "?",
//     password: "?",
//     host: "?",
//     port: 0,
//     database: "?"
// })
const { Client } = require('pg')
const t4sdb_client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "t4sdb"
})

const test_student = { schueler_id: 7, vorname: "OuJian", nachname: "Zhang", kuerzel: "zhaoud16", klasse: "3DHIF", abeteilung_id: 1 };
const test_fach = { fach_id: 8, fackuerzel: 'GGP', fachbezeichnung: 'Geografie'};
const test_id = 1;

t4sdb_client.connect()
    .then(() => console.log("Connected successfuly"))
    .then(function insertSubject() {
        return t4sdb_client.query("INSERT INTO FACH values($1, $2, $3)", [test_fach.fach_id, test_fach.fackuerzel, test_fach.fachbezeichnung])
    })
    .then(function insertStudent() {
        return t4sdb_client.query("INSERT INTO schueler values($1, $2, $3, $4, $5, $6)",
            [test_student.schueler_id,
            test_student.vorname,
            test_student.nachname,
            test_student.kuerzel,
            test_student.klasse,
            test_student.abeteilung_id])
    })
    .then(function getStudent() {
        return t4sdb_client.query("SELECT * FROM schueler WHERE schueler_id = " + test_id )
    })
    .then(results => console.table(results.rows))
    .then(function getAllStudents() {
        return t4sdb_client.query("SELECT * FROM schueler")
    })
    .then(results => console.table(results.rows))
    .then(function getAllSubjects() {
        return t4sdb_client.query("SELECT * FROM fach")
    })
    .then(results => console.table(results.rows))
    .catch(e => console.log(e))
    .finally(() => t4sdb_client.end())

  


