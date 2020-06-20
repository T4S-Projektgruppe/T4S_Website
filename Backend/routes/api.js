let router = require("express").Router();
const fs = require("fs"),
    path = require("path"),
    conf = require(path.join(process.cwd(), 'db-conf.json')),
    dba = require("../db-access");

router.route('/list').get((req, res) => {
    console.log('I am here')
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'list.html')); 
});

router.route('/profile').get((req, res) => {
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Profil.html'));
}).post((req, res, next) => {

}).put((req, res) => {

})

router.route('/register').get((req, res) => {
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Signup.html'));
}).post((req, res, next) => {
    let params = req.params;
})

router.route('/login').get((req, res) => {
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Login.html'));
}).post((req, res, next) => {

})

router.route("/home").get((req, res) => {
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Main-Page.html')); 
})

router.route('/student/:id').get((req, res) => {
    let id = req.params.id;
    dba.connect;
    let student = dba.getStudent(id);
    dba.disconnect();
    res.send(JSON.stringify(student))
})
router.route('/students').get((req,res) => {
    dba.connect();
    let values = dba.getAllStudents();
    dba.disconnect();
    res.send(JSON.stringify(values))
})


module.exports = router;