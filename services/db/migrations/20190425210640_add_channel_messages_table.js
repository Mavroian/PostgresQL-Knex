exports.up = function(knex, Promise) {
  return knex.schema.createTable("channel_messages", (table) => {
    table.increments().index();

    table
      .string("message", 150) // maximum length of 15 characters
      .unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index();

    table
      .integer("channel_id")
      .unsigned()
      .references("channels.id");

    table
      .integer("from_id")
      .unsigned()
      .references("users.id");

    table
      .timestamp("sent_at")
      .notNullable()
      .defaultTo(knex.fn.now()); //
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("channel_messages");
};
