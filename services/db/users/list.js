module.exports = (knex, User) => {
  return () => {
    return Promise.resolve(
      knex
        .select()
        .from("users")
        .then((users) =>
          users.map((user) => {
            return new User(user);
          })
        )
    );
  }; // fix me!
};
