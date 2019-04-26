exports.up = function(knex, Promise) {
  return knex.schema.createTable("channel_message", (t) => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.integer("channel_id") // maximum length of 15 characters
      .unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it
    t.integer("from_id")
      .unique()
      .notNullable()
      .index();
    t.string("message");

    t.timestamp("sent_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("channel_message");
};
