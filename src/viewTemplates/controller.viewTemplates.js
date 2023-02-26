const { Router } = require('express')
const mongoose = require('mongoose')

const router = Router()

router.get('/',  (req, res) => {
    const {user} = req.session
    res.render('profile', { style: "profile.css" ,user});
     })

router.get('/login',  (req, res) => {
    res.render('login', { style: "login.css" });
    
     })

router.get('/signup',  (req, res) => {
 res.render('signup', { style: "signup.css" });
  })

  router.get('/logout',  (req, res) => {
   req.session.destroy(error => {
    if(error) { return res.json({error})}
   });
   res.redirect("/login")
     }) 

  module.exports = router