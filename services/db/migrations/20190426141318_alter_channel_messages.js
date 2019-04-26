exports.up = function(knex, Promise) {
  return knex.schema.alterTable("channel_messages", (t) => {
    t.dropUnique("message");
  });
};

exports.down = function(knex, Promise) {};
