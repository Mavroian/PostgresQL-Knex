module.exports = (knex, ChannelMessage) => (params) => {
  return knex
    .select(
      "channel_messages.id",
      "channel_messages.sent_at as sentAt",
      "channels.name as toChannel",
      "channel_messages.message",
      "users.username as fromUser"
    )
    .from("channel_messages")
    .where({ channel_id: params.channelId })
    .join("channels", "channel_messages.channel_id", "channels.id")
    .join("users", "channel_messages.from_id", "=", "users.id")
    .then((messages) =>
      messages.map((message) => {
        return message;
      })
    );
}; // fix me!
