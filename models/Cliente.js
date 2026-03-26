const db = require ("./db");

const Cliente = db.sequelize.define("cliente",{
         nome:{
            type: db.Sequelize.STRING,
            allowNull:false
           
         },

         telefone:{
            type: db.Sequelize.STRING,
            allowNull:false
         },

        email:{
            type: db.Sequelize.STRING,
            allowNull:false

        },

        endereco:{
            type:db.Sequelize.STRING,
            allowNull:false
        }
    

});


Cliente.sync({force:false});

module.exports = Cliente;