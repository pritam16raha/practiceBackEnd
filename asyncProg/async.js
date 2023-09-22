// console.log("start operation");

// function sleep(milisecond) {
    
//     console.log("Start Time");

//     setTimeout(() => {
//         console.log("Inside the set timeout function!!!");
//     }, milisecond);   //setTimeout function accept another function as a parameter, which is called as callback

//     console.log("operation is done");
// }

// sleep(5000);

// console.log("Do something else!!!!");



//callback: it is a function which is passed inside another function , and in JS callback is sychronous

// console.log("Task is starting");

// function asyncTask(cb){
//     console.log("Task is running");
//     setTimeout(cb, 1000);
// }

// asyncTask(() => console.log(name)); //you will get the error, as name is defined later, but callback is unable to find, hence proved call back is asynchronous by nature
// console.log("task is done");
// const name = "pritam";


//in nodeJS we can write error as a first argument in callBack
// function asyncTask(cb) {
//     setTimeout(() => {
//         cb(null, "this is the data from server!!!");
//     }, 0);
// }
// asyncTask(( err, data ) => {
//     if(err) {
//         throw err
//     } else{
//         console.log("data is: ", data);
//     }
// });





// function asyncTask(cb) {
//     setTimeout(() => {
//         cb(null, "this is the data from server!!!");
//     }, 0);
// }

// function makeApiCall(cb) {
//     setTimeout(() => {
//         console.log("This is async task execution!!!");
//     }, 1000)
// }




/* #### promises start from here #### */
// const promise = new Promise((resolve, reject) => {
//     console.log("Async task is executing...");
//     throw "err";
//     if(true){
//         const person = { name: "Pritam"}
//         resolve(person)
//     } else{
//         const error = { errorCode: "1001"};
//         reject(error);
//     }
// });

//this holds two function. 1 is for resolve and another is for reject
// promise.then(
//     (val) => {
//         console.log("resolve passed!", val);
//     },
//     () => {
//         console.log("reject failed")
//     }
// );

// promise.then((val) => {
//     console.log(val);
// })
// .catch((err) => console.log("Failed",err))
// .finally(() => {
//     console.log("finally is HERE!")
// });


//once promise is resolved, we can interact with the promise agin in later... but with callback, it is not possible.

// let p = Promise.resolve("execution is done!");
// p.then((val) => console.log(val));

//callback is not asychronous by default, bt promise is asynchronous by default.


// function asyncTask() {
//     return Promise.resolve();
// }
// asyncTask().then(() => console.log(name));
// const name = "Pritam";

//chaining in promisses
// const p = Promise.resolve("i am done");

// p.then((val) => {
//     console.log("first return",val);
//     return "done2"
// }).then((val) => {
//     console.log("second return", val);
//     return "done3"
// }).then((val) => console.log("third return",val))
// .catch((val) => console.log("error wala ",val));

//no need to write catch block for every then block.

//promise all: api cal simultaniously
const makeApi = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("This api is executed in: " + time + " milisecond");
        }, time);
    });
};

let multiApi = [makeApi(1000), makeApi(2000), makeApi(5000)];

Promise.all(multiApi).then((values) =>{
    console.log("apis are :",values);
})

//race will provide me the sequence of the api call
Promise.race(multiApi).then((value) => {
    console.log("sequence is : ", value);
});