const http = require("http"); //http server is created

//for this .env port will be used
require("dotenv").config();

const PORT = process.env.PORT || 5001;

const server = http.createServer(( req, res ) => {})


//listening on PORT
server.listen(PORT, () => {
    console.log(`server is started on PORT : ${PORT}`)
});