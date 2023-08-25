const users = require("../models/usersSchema");

const moment = require("moment"); //to fetch date and time


exports.userPost = async(req, res) => {
    console.log(req.body);
    const { firstName, lastName, email, mobile, gender, status } = req.body;

    if ( !firstName || !lastName || !email || !mobile || !gender || !status ){
        res.status(400).json({ error: "chock khule dek, sob input diyechis to?"});
    }

    try{
        const preUser = await users.findOne({email:email});
        if(preUser){
            res.status(400).json({ error: "Onyo email de, ata already ache amr kache"});
        } else{
            //if user is not exist in database
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
            //registering the user
            const userData = new users({
                firstName, lastName, email, mobile, gender, status, datecreated: dateCreate //if key & value is same, then value is not required
            });

            await userData.save();
            res.status(200).json(userData);
        }
    } catch(err){
        res.status(400).json(err);
        console.log("catch block error");

    }
}

//get all users

exports.getUsers = async(req,res) => {
    try{
        const usersData = await users.find();

        res.status(200).json(usersData);
    } catch(err){
        res.status(400).json(err);
        console.log("user data pawa jabe na");
    }
}