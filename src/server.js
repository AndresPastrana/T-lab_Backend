require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const http = require('http');

const globalRoutes = {
  career: "/api/career",
}

const app = express();

const mongoose = require("./config/db.config").connection(app.get('env'));


// Middlewares
app.use(cors("*"));
app.use(express.static("public"));
app.use(express.json());

if (app.get('env') === "development") {
  app.use(morgan('dev'))
}

// ROUTES
app.use(globalRoutes.career, require('./routes/career'));


const server = http.createServer(app);



// Server events handlers
server.on("listening", () => {
  console.log(
    `Server: Up and running on: http://localhost:${server.address().port}/`
  );
});
server.on("error", (error) => {
  console.log("Server Error");
  console.log(error);
});


server.on('close', async (error) => {
  console.log("Server down succsessfully");
  await mongoose.connection.close(false);
  process.exit(0);
})




module.exports = {
  app, server
}



