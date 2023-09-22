/* types of middlewares:
1. Application-level middleware
2. Third party middleware
3. Router-level middleware
4. Built-In middleware
5. Error-Handling middleware */
/*
//1.application level middleware
const express = require('express');
const app = express();
const port = 5001;

//logger middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

//using the logger middleware
app.use(loggerMiddleware);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

*/

/*

//3. Router-level middleware
const express = require('express');

//importing path module
const path = require('path');

const router = express.Router();
const app = express();
const port = 5001;

// **** 4. Built-In/in-build middleware: the data will be received by this middleware which the client have been sent: data string from client to the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware: used to access the static file in the targeted location: now we can access the public/image/pic.jpeg from api request
app.use( '/static', express.static(path.join(__dirname, "public" ))); // 1. '/static': means creating virtual path. 2. "public": target folder name is "public"



//logger middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

//using the logger middleware
app.use(loggerMiddleware);

//creating actual router level middleware
const fakeAuth = (req, res, next) => {
    const authStatue = true;
    if(authStatue){
        console.log("AuthStatus is : ", authStatue);
        next();
    } else{
        res.status(401);
        throw new Error("User is UnAuthorised!!!");
    }
};


//api endPoint: using this we can place request in postman
app.use("/api/users", router);

//now creatin getUsers and createUser function. you can make those two function in defferent directory also

const getUsers = (req, res) => {
    res.json({ message: "Get All Users"});
};

const createUser = (req, res) => {
    console.log("This is the request body received from client : ", req.body); //the data will be sent to the server ****
    res.json({ message: "Create a New Users"});
};

//use fakeAuth function

router.use(fakeAuth);


//creating routes: by using this we can define a function will be get of post in postman api tester.
router.route("/").get(getUsers).post(createUser);

//5. Error-Handling middleware: to handle the error, as for example, unAuthorised user
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; //means, internal server error
    res.status(statusCode); //passing the my statusCode as status code
    switch (statusCode){
        case 401:
            res.json ({
                title: "UnAuthorised",
                message: err.message
            });
            break;
            case 404:
            res.json ({
                title: "Not Found!",
                message: err.message
            });
            break;
            case 500:
            res.json ({
                title: "Server Error!!",
                message: err.message
            });
            break;
            
            default:
                break;
    }
}

app.use(errorHandler);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

*/

/*
// 2. Third party middleware

//morgan is library: used for login. install using terminal

const express = require('express');

//importing path module
const path = require('path');

//express has built-in middleware top of the morgan: so we can use directly in-built middleware using express.logger
const logger = require("morgan");

const router = express.Router();
const app = express();
const port = 5001;

// **** 4. Built-In/in-build middleware: the data will be received by this middleware which the client have been sent: data string from client to the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware: used to access the static file in the targeted location: now we can access the public/image/pic.jpeg from api request
app.use( '/static', express.static(path.join(__dirname, "public" ))); // 1. '/static': means creating virtual path. 2. "public": target folder name is "public"



//logger middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

//using the logger middleware
app.use(loggerMiddleware);

app.use(logger("combined")); //"dev" is parameter here

//creating actual router level middleware
const fakeAuth = (req, res, next) => {
    const authStatue = true;
    if(authStatue){
        console.log("AuthStatus is : ", authStatue);
        next();
    } else{
        res.status(401);
        throw new Error("User is UnAuthorised!!!");
    }
};


//api endPoint: using this we can place request in postman
app.use("/api/users", router);

//now creatin getUsers and createUser function. you can make those two function in defferent directory also

const getUsers = (req, res) => {
    res.json({ message: "Get All Users"});
};

const createUser = (req, res) => {
    console.log("This is the request body received from client : ", req.body); //the data will be sent to the server ****
    res.json({ message: "Create a New Users"});
};

//use fakeAuth function

router.use(fakeAuth);


//creating routes: by using this we can define a function will be get of post in postman api tester.
router.route("/").get(getUsers).post(createUser);

//5. Error-Handling middleware: to handle the error, as for example, unAuthorised user
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; //means, internal server error
    res.status(statusCode); //passing the my statusCode as status code
    switch (statusCode){
        case 401:
            res.json ({
                title: "UnAuthorised",
                message: err.message
            });
            break;
            case 404:
            res.json ({
                title: "Not Found!",
                message: err.message
            });
            break;
            case 500:
            res.json ({
                title: "Server Error!!",
                message: err.message
            });
            break;
            
            default:
                break;
    }
}

//for 3rd party middleware, i am creating new route, else i can get 404 error
app.all("*", (req, res) => {
    res.status(404); //see the switch cases 
    throw new Error("Route is not avilable");
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

*/


//another Thired party middleware: multer : which is used to uploadf files to the server

const express = require('express');

//importing path module
const path = require('path');

const multer = require('multer');

//express has built-in middleware top of the morgan: so we can use directly in-built middleware using express.logger
const logger = require("morgan");

const router = express.Router();

//now path will be defined where the file will be uploaded:
const upload = multer({ dest: "./public/uploads"});
const app = express();
const port = 5001;

// **** 4. Built-In/in-build middleware: the data will be received by this middleware which the client have been sent: data string from client to the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware: used to access the static file in the targeted location: now we can access the public/image/pic.jpeg from api request
app.use( '/static', express.static(path.join(__dirname, "public" ))); // 1. '/static': means creating virtual path. 2. "public": target folder name is "public"



//logger middleware
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
    next();
};

//using the logger middleware
app.use(loggerMiddleware);

app.use(logger("combined")); //"dev" is parameter here

//creating actual router level middleware
const fakeAuth = (req, res, next) => {
    const authStatue = true;
    if(authStatue){
        console.log("AuthStatus is : ", authStatue);
        next();
    } else{
        res.status(401);
        throw new Error("User is UnAuthorised!!!");
    }
};


//api endPoint: using this we can place request in postman
app.use("/api/users", router);

//now creatin getUsers and createUser function. you can make those two function in defferent directory also

const getUsers = (req, res) => {
    res.json({ message: "Get All Users"});
};

const createUser = (req, res) => {
    console.log("This is the request body received from client : ", req.body); //the data will be sent to the server ****
    res.json({ message: "Create a New Users"});
};

//use fakeAuth function

router.use(fakeAuth);


//creating routes: by using this we can define a function will be get of post in postman api tester.
router.route("/").get(getUsers).post(createUser);

//5. Error-Handling middleware: to handle the error, as for example, unAuthorised user
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500; //means, internal server error
    res.status(statusCode); //passing the my statusCode as status code
    switch (statusCode){
        case 401:
            res.json ({
                title: "UnAuthorised",
                message: err.message
            });
            break;
            case 404:
            res.json ({
                title: "Not Found!",
                message: err.message
            });
            break;
            case 500:
            res.json ({
                title: "Server Error!!",
                message: err.message
            });
            break;
            
            default:
                break;
    }
}

//here i will define the EndPoint for multer:
app.post("/uploads", upload.single("image"), (req, res, next) => {
    console.log(req.file, req.body);
    res.send(req.file);
}, (err, req, res, next) => {
    res.status(400).send({ err: err.message });
});

//for 3rd party middleware, i am creating new route, else i can get 404 error
app.all("*", (req, res) => {
    res.status(404); //see the switch cases 
    throw new Error("Route is not avilable");
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
