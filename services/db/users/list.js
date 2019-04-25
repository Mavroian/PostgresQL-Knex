module.exports = (knex, User) => {
  return () => {
    return knex
      .select("username")
      .from("users")
      .then((res) => {
        return res;
      });
    // return Promise.resolve([knex.select("username").from("users")]).then(
    //   console.log
    // ); // fix me!
  };
};
