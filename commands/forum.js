module.exports = {
    name: 'forum',
    aliases: ['forums'],
    description: 'Returns MapleRoyals FOrum',
    execute(message, args) {
      message.channel.send('Here\'s the link for the Forum:\n https://mapleroyals.com/forum/');
	},
};

