"use strict";

// const school_client = new Client({
//     user: "?",
//     password: "?",
//     host: "?",
//     port: 0,
//     database: "?"
// })
var _require = require('pg'),
    Client = _require.Client;

function connect() {
  t4sdb_client.connect();
  console.log("connected successfully");
}

var t4sdb_client = new Client({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "t4sdb"
});

try {
  var _getAllStudents = function _getAllStudents() {
    return t4sdb_client.query("SELECT * FROM schueler");
  };

  var _getAllSubjects = function _getAllSubjects() {
    return t4sdb_client.query("SELECT * FROM fach");
  };

  var _getStudent = function _getStudent(id) {
    return t4sdb_client.query("SELECT * FROM schueler WHERE schueler_id = " + id);
  };

  var _disconnect = function _disconnect() {
    t4sdb_client.end();
  };

  var _insertSubject = function _insertSubject(kuerzel, bezeichnung) {
    return t4sdb_client.query("INSERT INTO FACH(fachkuerzel, fachbezeichnung) values($1, $2)", [kuerzel, bezeichnung]);
  };

  var _insertStudent = function _insertStudent(vname, nname, kuerzel, klasse, abteilung_id) {
    return t4sdb_client.query("INSERT INTO schueler values( $1, $2, $3, $4, $5)", vname, nname, kuerzel, klasse, abteilung_id);
  };
} catch (error) {
  console.log("something went wrong", error);
}

module.exports = {
  getAllStudents: getAllStudents,
  getAllSubjects: getAllSubjects,
  connect: connect,
  disconnect: disconnect,
  getStudent: getStudent,
  insertStudent: insertStudent,
  insertSubject: insertSubject
};