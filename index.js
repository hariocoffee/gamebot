// Load up the discord.js library
const Discord = require('discord.js');
const { Client, Attachment, Permissions } = require('discord.js');

// Here we load the config.json file that contains our token and our prefix values. 
const { prefix, token } = require('./config.json');
// config.token contains the bot's token
// config.prefix contains the message prefix.

// Your client.
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const util = require('util');

// Import the native fs module
const fs = require('fs');

//Dynamically reading command files
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// This event will run if the bot starts, and logs in, successfully.
client.once('ready', () => {
	console.log('Ready!');
});

//Displays Game Status
client.on('ready', () => {
	client.user.setActivity('Type $help')
  })

client.on('message', message => {
	// This event will run on every single message received, from any channel or DM.
	if (!message.content.startsWith(prefix) || message.author.bot) return;

    //Sets up user command
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
	
	//Array of strings including aliases
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;
	
    //If the command is within DMs, it will not execute
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
	}

	//If the user does not handle the commands properly, they will be pinged.
    if (command.args && !args.length){
        let reply = `You didn't provide any arguments, ${message.author}! You can send \`${prefix}help [command name]\` to get info on a specific command! `;
        if(command.usage){
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

	//Avoids user spam from happening
	if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
                    .then(msg => {
                      msg.delete(10000)
                    })
        }
	}
	
    /*If the timestamps Collection doesn't have the message author's ID
    .set() the author ID with the current timestamp and create a setTimeout()
    to automatically delete it after the cooldown period has passed.*/
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    
    //Executes commands from the 'commands' folder. If it fails it will catch the error.
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command! Please utilize the `$help` command to assist you with your needs.');
    }
});

client.login(token);