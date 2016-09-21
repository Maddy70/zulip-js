const zulip = require('../lib/');

const config = {
  username: process.env.ZULIP_USERNAME,
  password: process.env.ZULIP_PASSWORD,
  realm: process.env.ZULIP_REALM,
};

zulip(config).then((z) => {
  // Register queue to receive messages for user
  const params = {
    event_types: ['message'],
  };

  // Prints
  // { msg: '',
  //   max_message_id: 100375522,
  //   last_event_id: -1,
  //   result: 'success',
  //   queue_id: 'a queue id' }

  return z.queues.register(params).then(console.log);
}).catch(err => console.log(err.msg));
