exports.up = function(knex, Promise) {
  return knex.schema.createTable("channels", (table) => {
    table
      .increments() // auto-incrementing id column
      .index(); // index this column

    table
      .string("name", 15) // maximum length of 15 characters
      .unique() // add a unique constraint to this column
      .notNullable() // add a not-null constraint to this column
      .index(); // index it
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("channels");
};
