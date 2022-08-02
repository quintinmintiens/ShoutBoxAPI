const { tables } = require('..');

module.exports = {
    seed: async (knex) => {
  
      // first delete all entries
      await knex(tables.posts).delete();
  
      // then add the fresh users
      await knex(tables.posts).insert([
        { postID: '1', userID: '1', title: 'Mooi weer vandaag', text: 'Deze hittegolf doet me toch even puffen'},
        { postID: '2', userID: '2', title: 'Veuls te warm', text: 'Ik kan het niet meer aan 38graden is gewoon te veel jongens en meisjes'},
      ]);
    },
  };