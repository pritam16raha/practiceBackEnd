const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userController");

//routes
//to register my user, we have to define our router
router.post("/user/register", controllers.userPost);
//we can write the router logic here, but we will write this into the controller inside userController file


//router to fetch saved users from database
router.get("/user/getAllUser", controllers.getUsers);

module.exports = router;