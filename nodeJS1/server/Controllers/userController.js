const users = require("../models/usersSchema");

const moment = require("moment"); //to fetch date and time

//import customErrorHandler from "../services/customErrorHandler";


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

//get single user

exports.getSingleUser = async(req, res) => {
    //const id = req.params.id

    //const {id} = req.params; //destrutching id
    
    try{
        const singleUser = await users.findByIdAndDelete({_id: req.params.id});
        res.status(200).json(singleUser);

    } catch (err){
        res.status(400).json(err);
        console.log("user nei re ekane, age add kor, ter por khujbi");
    }
}

//delete user
exports.deleteSingleUser = async(req, res) => {
    const {id} = req.params;
    try{
        const deleteUser = await users.findOne({_id:id});
        res.status(200).json(deleteUser);
    } catch (error){
        res.status(400).json(error);
        console.log("user nei re ekhane, agei delete hoye gache dek");
    }
}

//update user
// exports.updateOne = async (req, res) => {
//     const {id} = req.params;
//     const { firstName, lastName, email, mobile, gender, status } = req.body;

//     try{
//         const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
//         const updateSingleUser = await users.findByIdAndUpdate({_id: id}, {
//             firstName, lastName, email, mobile, gender, status, dateUpdated: dateUpdate 
//         },{new: true}); //new true means it will return the updated value
        
//         await updateSingleUser.save();
//         res.status(200).json(updateSingleUser);
        
//     } catch(err){
//         res.status.json(err);
//         console.log("update hobe na, kichu vul korechis dek");
//     }
// }


exports.updateOne = async (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, email, mobile, gender, status } = req.body;

    try{
        const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        if(gender !== "Male" || gender !== "Female" || gender !== "Transgender" ){
            const updateUser = await users.findByIdAndUpdate({ _id: id }, {
                firstName, lastName, email, mobile, gender, status, dateUpdated: dateUpdate
            }, {new: true});
            await updateUser.save();
        res.status(200).json(updateUser);
        }




        
        await updateUser.save();
        res.status(200).json(updateUser);
        
    } catch(err){
        res.status(400).json(err);
        console.log("vul val parameter dile delete hobe na");
    }
}