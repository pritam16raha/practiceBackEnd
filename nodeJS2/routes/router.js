//if user visited, routes give instruction what to do... *
const express = require('express');
const router = express.Router();

const {getAllProducts, getAllForTesting, findLastName} = require("../controllers/controller")  //## and the routes will take the user to controller.js, whare the fuction actually defined


router.route("/").get(getAllProducts); //route is inbuild method of express
router.route("/testing").get(getAllForTesting); //means, anyone visit to localhost:6500/testing, they will get the getAllForTesting function to run

router.route("/lastName").get(findLastName);


module.exports = router;