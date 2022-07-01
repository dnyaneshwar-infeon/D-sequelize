const { Sequelize , DataTypes }=require('sequelize');

const db=require('../util/connection');

const actor=db.define("Actor" , {
   
    act_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    act_dob:{
        type:DataTypes.DATE,
        allowNull:true,
    },
});

module.exports=actor;