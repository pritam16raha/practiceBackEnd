//error object
//const err = new Error("something went wrong!!!");
//console.log(err.stack);
//console.log(err.message);
//throw new Error("throwing khub baje error!!!");

const { amrError } = require("./customError");
//import { amrError } from "./customError";

//throw new amrError("ata holo amr error, jeta ami baniyechi");


// 2nd approach: handle the exception using try and catch:
// try{
//     doSomething();
// } catch (e) {
//     console.log('Error esache catch block e');
//     console.log(e);
// }

function doSomething(){

    const data = fetch("localhosot:300/api");
    //console.log("ata doSomething function() er vitor");
    //return "in return do something"
}

//3rd approach: uncaught exception : sometimes exception can not be caught by try and block, then uncaught exception can be used as default exception
// process.on("uncaughtException", (err) => {
//     console.log("There was an uncaught exception!!!", err);
//     process.exit(1);
// });

//doSomething();

//4th approach: exception with promisses

// const promise = new Promise(( resolve, reject ) => {
//     if(true){
//         resolve(doSomething());
//         console.log("in the resolve section");
//     }else{
//         reject(doSomething());
//         console.log("in the reject section");
//     }
// });

// promise.then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log("Error Occured!!!");
//     console.log(err);
// });



//5th approach: last section: async and await

const myFunction = async () => {
    try {
        await doSomething();
    } catch(err) {
        throw new amrError(err.message);
    }
};

myFunction();

