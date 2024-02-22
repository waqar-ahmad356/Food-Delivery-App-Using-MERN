const express=require('express');


const app=express();
const mongoDB=require('./db');
mongoDB();
app.use(express.json())
app.use("/api",require('./Router/CreateUser'));

app.listen(4500);