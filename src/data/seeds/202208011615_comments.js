const { tables } = require('..');

module.exports = {
    seed: async (knex) => {
  
      // first delete all entries
      await knex(tables.comments).delete();
  
      // then add the fresh users
      await knex(tables.comments).insert([
        { commentID: '1', postID: '1', userID: '2', text:'Inderdaad man het gaat erover'},
        { commentID: '2', postID: '2', userID: '1', text:'Airco laten installeren denk ik dan'},
      ]);
    },
  };