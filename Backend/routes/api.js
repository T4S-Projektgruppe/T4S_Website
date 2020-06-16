let router = require("express").Router;
const fs = require("fs"),
    path = require("path"),
    conf = require(path.join(process.cwd(), 'db-conf.json'));

router.route('/list').get((req, res) => {
    res.status(200).send('this will be a list');
});

router.route('/profile/:id').get((req, res) => {
    let id = req.params.id;
    //perform sql query SELECT * FROM user WHERE user_id = id
    //return user object as json
    console.log(id)
    res.send('this is your profile');
}).post((req, res, next) => {

}).put((req, res) => {

})

router.route("/").get((req, res) => {
  res.send("you accessed the homepage");  
})