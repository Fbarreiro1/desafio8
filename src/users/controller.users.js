const { Router } = require('express')
const User = require("../dao/models/User.model")

const router = Router()

router.get('/',  (req, res) => {
    res.json({ message: "users" });
     })

     
router.post('/', async (req, res) => {
    try {
    const {first_name, last_name, age, email, password} = req.body;
    let newUserInfo = {};
    if(email == "adminCoder@coder.com" && password == "adminCod3r123") {
       newUserInfo = {
            first_name,
             last_name,
              age, 
              email, 
              password ,
              role: "admin"
        }
    }

    else {
         newUserInfo = {
            first_name,
             last_name,
              age, 
              email, 
              password ,
              role: "usuario"
        }
    }
    
    const newUser = await User.create(newUserInfo)

    console.log("el nuevo user es:",newUser)

    res.redirect("/products")
    
    }
 catch(error) {
    console.error("Se ha producido un error: " + error.message);
 }})


module.exports = router