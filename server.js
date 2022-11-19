const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
const path = require("path");

const basePath = '';
const port = process.env.port;
app.use(cors());
app.use(express.json());

//cấu hình chạy reactjs trên node server
app.use(express.static(path.resolve(__dirname + "/build")));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname + "build/index.html"));
});
//


app.listen(port, () => {
    console.log('server is running')
});