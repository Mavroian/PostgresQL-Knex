module.exports = (knex, channelMessage) => (params) => {
  return knex
    .insert({
      from_id: params.fromId,
      channel_id: params.channelId,
      message: params.message,
    })
    .into("channel_messages")
    .then(() => {
      // return knex.select().from("channel_messages");
      return knex
        .select(
          "channel_messages.id",
          "channel_messages.sent_at as sentAt",
          "channels.name as toChannel",
          "channel_messages.message",
          "users.username as fromUser"
        )
        .from("channel_messages")
        .join("channels", "channel_messages.channel_id", "channels.id")
        .join("users", "channel_messages.from_id", "=", "users.id");
    })
    .then((messages) => messages)
    .catch((err) => {
      throw err;
    });
};
