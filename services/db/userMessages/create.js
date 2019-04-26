module.exports = (knex, UserMessage) => {
  return (params) => {
    console.log(params, "lkhflsdkhlsdkfnsdlknsldknvlkkdkkkkk");
    return knex
      .insert({
        from_id: params.fromId,
        to_id: params.toId,
        message: params.message,
      })
      .into("user_messages")
      .then(() => {
        return knex
          .select(
            "user_messages.id",
            "user_messages.sent_at as sentAt",
            "user_messages.message",
            "users.username as fromUser"
          )
          .from("user_messages")
          .join("users", "user_messages.from_id", "=", "users.id");
      })
      .then((messages) => messages)
      .catch((err) => {
        throw err;
      });
  };
};
