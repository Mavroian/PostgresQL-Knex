module.exports = (knex, channelMessage) => (params) => {
  return knex
    .insert(
      {
        message: params.message,
      },
      { channel_id: params.channelId },
      { fromUser: params.fromId }
    )
    .into("channel_messages")
    .then(() => {
      knex
        .select("name")
        .from("users")
        .where({ id: params.fromId });
    })
    .then((user_name) => {
      knex
        .select("name")
        .from("channels")
        .where({ id: params.channelId });
    })
    .then((channel_name) => {
      return {
        fromUser: "rp-3",
        toChannel: channel_name,
        message: params.message,
      };
    });
};
