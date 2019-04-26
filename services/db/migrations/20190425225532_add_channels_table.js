exports.up = function(knex, Promise) {
  return knex.schema.createTable("channel", (t) => {
    t.increments() // auto-incrementing id column
      .index(); // index this column

    t.string("name", 15) // maximum length of 15 characters
      .unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it

    t.timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now()); // default to the current time
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("channel");
};
