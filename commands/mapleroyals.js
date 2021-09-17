module.exports = {
	name: 'mapleroyals',
	description: 'Returns MapleRoyals website and its features',
	execute(message, args) {
        // Command Listener that returns MapleRoyals homepage
        const Discord = require('discord.js');
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('MapleRoyals Website')
            .setURL('https://mapleroyals.com/?page=index/')
            .attachFiles(['https://i.imgur.com/ijI8aWo.png'])
            .setAuthor('MapleRoyals', 'https://i.imgur.com/wSTFkRM.png', 'https://mapleroyals.com/?page=index/')
            .setDescription('MapleRoyals offers a nostalgic experience, the way you remember it, with a large community where you can easily find your place. Whether it’s bossing, PQing, or grinding, you can enjoy it all again.')
            .setThumbnail('https://i.imgur.com/BJIQBsN.png')
            .addField('v83 Private Server', 'Rates: \nEXP Rate: 3.2x \nMeso Rate: 4x \nDrop Rate: 2x')
            .addField('Server Time:', 'GMT', true)
            .addField('Powered By:', 'Limestone | Imperva Incapsula', true)
            .addField('Vote here:', 'https://mapleroyals.com/?page=vote', true)
            .setTimestamp()
            .setFooter('Old School Maplestory Private Server', 'https://i.imgur.com/BJIQBsN.png');
        message.channel.send(exampleEmbed);
	},
};