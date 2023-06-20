import express from 'express';
import cors from 'cors';
import Connection from './database/db.js';
import Defdata from './bydefault.js';
 import Route from './routes/routes.js';
 
const app=express();
const PORT_NO=4800;
app.use(cors());
app.use('/',Route);
Connection();

app.listen(PORT_NO,()=>{
    console.log("server run successfully")
});
 Defdata();