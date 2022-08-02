const { tables } = require('..');

module.exports = {
	up: async (knex) => {
		await knex.schema.createTable(tables.posts, (table) => {
			table.increments('postID')
				.primary();

            table.int('userID')
				.notNullable();

			
			table.foreign('userID', 'fk_posts_userID')
				.references(`${tables.user}.userID`)
				.onDelete('cascade');

			table.string('title', 255)
				.notNullable();

            table.string('text', 255)
				.notNullable();

		});
	},
	down: (knex) => {
		return knex.schema.dropTableIfExists(tables.posts);
	},
};