const { tables } = require('..');

module.exports = {
	up: async (knex) => {
		await knex.schema.createTable(tables.comments, (table) => {
			table.increments('commentID')
				.primary();

            table.int('postID')
                .notNullable();
            
            table.foreign('postID', 'fk_comments_postID')
                .references(`${tables.posts}.postID`)
                .onDelete('CASCADE');

            table.int('userID')
                .notNullable();
            
            table.foreign('userID', 'fk_commentUser')
                .references(`${tables.user}.userID`)
                .onDelete('CASCADE');

            table.string('text', 255)
                .notNullable();

		});
	},
	down: (knex) => {
		return knex.schema.dropTableIfExists(tables.spelerlijst);
	},
};