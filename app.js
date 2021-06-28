const express = require('express');
const app= express();
const parser= require('body-parser');
const router=require('./controller/controller');

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())
app.set("view engine", "ejs");
app.use("/",router);
require('./dbconfig')

const port=3007;
app.listen(port,()=>console.log(`app running localhost:${port}`));