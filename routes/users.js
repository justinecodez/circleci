var express = require('express')
var router = express.Router()
const auth = require('../middleware/auth')


const userCtrl = require('../controllers/users');



// define the login page route
router.get('/login', function (req, res) {
  res.render('login')
})
// define the signup route
router.get('/signup', function (req, res) {
  res.render('signup')
})



/**
 * //post the sign up data to the database
 * 
 * router.post('/signup',(req,res)=>{
  console.log(req.body);
  res.send("Hello woerld")
})
 */

router.post('/signup', auth,userCtrl.signup);
router.post('/login', auth,userCtrl.login);
module.exports = router