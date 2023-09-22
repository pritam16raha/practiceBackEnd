


//*.. and what to be done, it will defined in controllers
// const getAllProducts = async(req, res) => {
//     res.status(200).json({ msg: "I am getiing all products" }); //simply passing a msg inside json
// };

// const getAllForTesting = async(req, res) => {
//     res.status(200).json({ msg2: "I getting all products for Testing" });
// };

// //exporting both the function
// module.exports = { getAllProducts, getAllForTesting };


const product = require("../models/productSchema");

const getAllProducts = async (req, res) => {
    const myData = await product.find( req.query );
    res.status(200).json({ myData });
};

const getAllForTesting = async (req, res) => {
    const { Company } = req.query;
    const emptyObject = {};
    if(Company){
        emptyObject.Company = Company;
    };

    const myData = await product.find(emptyObject);
    res.status(200).json({ myData });
};

const findLastName = async (req, res) => {
    const { LastName } = req.query;
    const emptyObject = {};
    if(LastName){
        emptyObject.LastName = LastName;
    };

    const myData = await product.find(emptyObject);
    res.status(300).json({ myData });
};

module.exports = { getAllProducts, getAllForTesting , findLastName }; //