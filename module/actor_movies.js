const { Sequelize , DataTypes }= require('sequelize');

const db=require('../util/connection');
const actor = require('./actor');
const movie = require('./movies');
const movie_actor=db.define("movie_actor" , {
    movie_id:{
        type:DataTypes.INTEGER,
        references:{
            model: movie,
            key:'id',
        },
    },
    actor_id:{
        type:DataTypes.INTEGER,
        references:{
            model:actor,
            key:'id',
        },
   },

});
movie.belongsToMany(actor , { through:"movie_actor"});
actor.belongsToMany(movie , { through:"movie_actor"});

module.exports=movie_actor;