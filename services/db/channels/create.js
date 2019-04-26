const validateChannelName = (uName) =>
  typeof uName === "string" && uName.replace(" ", "").length > 3;

module.exports = (knex, Channel) => {
  return (params) => {
    let { name } = params;
    name = name.toLowerCase();
    return knex
      .insert({ name })
      .into("channels")
      .then(() => {
        return knex
          .select()
          .from("channels")
          .where({ name });
      })
      .then((channel) => new Channel(channel.pop()))
      .catch((err) => {
        if (err.message.match("duplicate key value"))
          throw new Error("That channel already exists");
      }); // fix me!
  };
};
