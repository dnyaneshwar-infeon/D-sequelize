
const movie=require('../module/movies');
const actor=require('../module/actor');
const movie_actor=require('../module/actor_movies');
const { result } = require('lodash');
const product = require('../../OneToMany/model/product');
const table=function(req , res)
{
    movie.sync();
    res.json("Table Created");
}

const table1=function(req ,res)
{
    actor.sync();
    res.json("table created");
}
const table2=function(req , res)
{
    movie_actor.sync();
    res.json("table Created");
}
const addmovie=function(req , res)
{
    movie.create({
        m_name:req.query.m_name,
        m_date:req.query.m_date,
        m_info:req.query.m_info,
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}
const insactor=function(req , res)
{
    actor.create({
        act_name:req.query.act_name,
        act_dob:req.query.act_dob,
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    });
}
const asso=function(req , res)
{
    movie_actor.create({
        MovieId:req.query.MovieId,
        ActorId:req.query.ActorId,     
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}

const findactor=function(req ,res)
{
    actor.findAll({ 
        attributes:["act_name" , "act_dob"],
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}
const findmovie=function(req ,res)
{
    movie.findAll({
        attributes:["m_name" , "m_date" , "m_info"],
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}

const findmovieactor=function(req, res)
{
    actor.findAll({
        attributes:["act_name" , "act_dob"],
        
        where:{
            MovieId:req.query.MovieId,
        },
        include: [{
            model: movie_actor,
            where: {MovieId: req.query.MovieId,},
            required: true,
           }]
         
    }).then((result)=>{
        return res.json(result);
    }).catch((error)=>{
        return res.json(error);
    })
}

module.exports.table=table;
module.exports.table1=table1;
module.exports.table2=table2;
module.exports.addmovie=addmovie;
module.exports.insactor=insactor;
module.exports.asso=asso;
module.exports.findactor=findactor;
module.exports.findmovie=findmovie;
module.exports.findmovieactor=findmovieactor;
