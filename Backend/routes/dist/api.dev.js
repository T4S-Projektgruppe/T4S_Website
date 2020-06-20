"use strict";

var router = require("express").Router();

var fs = require("fs"),
    path = require("path"),
    conf = require(path.join(process.cwd(), 'db-conf.json')),
    dba = require("../db-access");

router.route('/list').get(function (req, res) {
  console.log('I am here');
  res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'list.html'));
});
router.route('/profile').get(function (req, res) {
  res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Profil.html'));
}).post(function (req, res, next) {}).put(function (req, res) {});
router.route('/register').get(function (req, res) {
  res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Signup.html'));
}).post(function (req, res, next) {
  var params = req.params;
});
router.route('/login').get(function (req, res) {
  res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Login.html'));
}).post(function (req, res, next) {});
router.route("/home").get(function (req, res) {
  res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Main-Page.html'));
});
router.route('/student/:id').get(function (req, res) {
  var id = req.params.id;
  dba.connect;
  var student = dba.getStudent(id);
  dba.disconnect();
  res.send(JSON.stringify(student));
});
router.route('/students').get(function (req, res) {
  dba.connect();
  var values = dba.getAllStudents();
  dba.disconnect();
  res.send(JSON.stringify(values));
});
module.exports = router;