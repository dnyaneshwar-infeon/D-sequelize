const express=require('express');
const app=express();

const db=require('./util/connection');
const table=require('./controller/all');
const table1=require('./controller/all');
const table2=require('./controller/all');
const addmovie=require('./controller/all');
const insactor=require('./controller/all');
const asso=require('./controller/all');
const findactor=require('./controller/all');
const findmovie=require('./controller/all');
const findmovieactor=require('./controller/all');

const initapp=async()=>{
    console.log("Testing Database");
    try
    {
        db.authenticate();
        console.log("Database Connected");
    }catch(error)
    {
        console.log(error);
    }
}
initapp();

app.get('/table' , table.table);
app.get('/table1' , table1.table1);
app.get('/table2' , table2.table2);
app.post('/addmovie' , addmovie.addmovie);
app.post('/insactor' , insactor.insactor);
app.post('/asso' , asso.asso);
app.get('/findactor' , findactor.findactor);
app.get('/findmovie' , findmovie.findmovie);
app.get('/find' , findmovieactor.findmovieactor);




app.listen(8000 , ()=>{
    console.log(`Listening on port ${8000}`);
})