const Sequelize=require('sequelize');

const con=new Sequelize("manytomany" , "root" , "", {
    host:"localhost",
    dialect:"mysql"
});

module.exports=con;