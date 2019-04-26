module.exports = (knex, UserMessage) => {
  return (params) => {
    return knex
      .select(
        "user_messages.id",
        "user_messages.sent_at as sentAt",
        "user_messages.message",
        "users.username as fromUser"
      )
      .from("user_messages")
      .where({ from_id: params.fromId })
      .orWhere({ to_id: params.toId })
      .join("users", "user_messages.from_id", "=", "users.id")
      .then((messages) =>
        messages.map((message) => {
          return message;
        })
      );
  };
};
