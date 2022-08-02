const { tables } = require('..');
const Role = require('../../core/roles')
module.exports = {
    seed: async (knex) => {
  
      // first delete all entries
      await knex(tables.user).delete();
  
      // then add the fresh users
      await knex(tables.user).insert([
        { 
          userID: '1', 
          voornaam:'Quintin', 
          naam:'Mintiens', 
          email:'quintin.mintiens@student.hogent.be',
          password_hash: '',
          roles: JSON.stringify([Role.ADMIN, Role.USER]),
      },

        { 
          userID: '2', 
          voornaam:'Alec', 
          naam:'Hendrickx', 
          email:'alec@deepbridge.be',
          password_hash: '',
          roles: JSON.stringify([Role.USER])
       },
      ]);
    },
  };