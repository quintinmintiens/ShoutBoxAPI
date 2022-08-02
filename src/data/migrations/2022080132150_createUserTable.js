const { tables } = require('..');

module.exports = {
	up: async (knex) => {
		await knex.schema.createTable(tables.user, (table) => {
			table.increments('userID')
				.primary();

            table.string('voornaam', 255)
                .notNullable();

            table.string('naam', 255)
                .notNullable();

			

		});
	},
	down: (knex) => {
		return knex.schema.dropTableIfExists(tables.user);
	},
};