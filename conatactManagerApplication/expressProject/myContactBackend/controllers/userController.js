//register a user
//post/api/users/register
//and it is public end point
const asyncHandler = require("express-async-handler");
const registerUser = asyncHandler( async (req, res) => {
    res.json({ message: "Register the user" });
});

const loginUser = asyncHandler( async (req, res) => {
    res.json({ message: "Login Done"})
});

const currentInformation = asyncHandler ( async (req, res) => {
    res.json({ message: "only users is seeing current user profile" });
});

module.exports = { registerUser , loginUser, currentInformation };