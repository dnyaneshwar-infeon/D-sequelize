const { Sequelize , DataTypes }= require('sequelize');

const db=require('../util/connection');
const actor = require('./actor');

const movie=db.define("Movie" , {
   
    m_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    m_date:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    m_info:{
        type:DataTypes.STRING,
        allowNull:true,
    },

});

movie.belongsToMany(actor , { through:"movie_actor"});
actor.belongsToMany(movie , { through:"movie_actor"});

module.exports=movie;