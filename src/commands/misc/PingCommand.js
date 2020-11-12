const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'misc', []);
  }

  run(client, message, args) {
    message.channel.send('ping command works');
  }
}