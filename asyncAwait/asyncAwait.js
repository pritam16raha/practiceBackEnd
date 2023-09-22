// const userLogin = () => {
//     console.log("Enter username and password");
//     let username = prompt("enter username: ");
//     let password = prompt("enter password :");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("performing user Authentication");
//             if(username === "Pritam" && password === "12345"){
//                 resolve("User Authenticated!");
//             } else {
//                 reject("Authentication Failed");
//             }
//         }, 1000);
//     });
// };

// function goToHomePage(userAuthStatus) {
//     return Promise.resolve(`Go To The HomePage As : ${userAuthStatus}`);
// }

// userLogin()
// .then((response) => {
//     console.log("validate user");
//     return goToHomePage(response);
// })
// .then((userAuthStatus) => {
//     console.log(userAuthStatus);
// }).catch((err) => {
//     console.log("username of password is wrong",err);
// });



//the avobe whole promise will be wrapped up into the async await alos it will make it small also

// const userLogin = () => {
//     console.log("Enter username and password");
//     let username = prompt("enter username: ");
//     let password = prompt("enter password :");

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("performing user Authentication");
//             if(username === "Pritam" && password === "12345"){
//                 resolve("User Authenticated!");
//             } else {
//                 reject("Authentication Failed");
//             }
//         }, 1000);
//     });
// };

// function goToHomePage(userAuthStatus) {
//     return Promise.resolve(`Go To The HomePage As : ${userAuthStatus}`);
// }

// async function performTask() {
//     try{
//     const response = await userLogin();
//     console.log("validate user");
//     const userAuth = await goToHomePage(response);
//     console.log(userAuth);
//     } catch(err) {
//         console.log("user Authentication is failed", err);
//     }
// }
// performTask();


//which technique is faster: async a await or promise

const makeApi = (time) => {
    return () => new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("This api is executed in: " + time + " milisecond");
        }, time);
    });
};

let multiApi = [makeApi(1000), makeApi(2000), makeApi(5000)];

// Promise.all(multiApi).then((values) =>{
//     console.log("apis are :",values);
// })

//race will provide me the sequence of the api call
// Promise.all(multiApi).then((value) => {
//     console.log("sequence is : ", value);
// });

//simultanious function: api will execute one after another. next function will  always wait for execution of current function
(async function () {
    for (let request of multiApi) {
        console.log(await request());
    }
}) ();