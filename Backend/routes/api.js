let router = require("express").Router();
const fs = require("fs"),
    path = require("path"),
    conf = require(path.join(process.cwd(), 'db-conf.json')),
    student = require("../student");


router.route('/list').get((req, res) => {
    console.log('I am here')
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'list.html')); 
});

router.route('/profile/:id').get((req, res) => {
    let id = req.params.id;
    //perform sql query SELECT * FROM user WHERE user_id = id
    //return user object as json
    console.log(id)
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Profil.html'));
}).post((req, res, next) => {

}).put((req, res) => {

})
router.route('/register').get((req, res) => {
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Signup.html'));
}).post((req, res, next) => {

})

router.route('/login').get((req, res) => {
    res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Login.html'));
}).post((req, res, next) => {

})

router.route("/").get((req, res) => {
  res.status(200).sendFile(path.join(process.cwd(), '..', 'Frontend', 'Main-Page.html')); 
})
module.exports = router;