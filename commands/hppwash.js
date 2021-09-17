module.exports = {
	name: 'hppwash',
    description: 'This command allows the users to input arguments in order to figure out the amount of times they are able to reset MP into HP.\n The format goes as follows: \`$hpwash <level> <cleanHP> <cleanMP> <class>\`\n\n __**Tip:**__\nThe MaxHP and MaxMP cap at 30,000 while the base is 10 and 5, respectively.\n__**Note:**__\nCleanHP and CleanMP are your BASE hp and mp requirements. This means that any hp or mp obtained from equips will NOT be part of this.\n__**Available <class> to call:**__\n-Beginner\n-Spearman\n-Fighter\n-Thief\n-Bowman\n-Pirate\n-Magician',
	execute(message, args) {
        if(args.length<1){
            message.reply('There was an error. Please ensure that your command is the in following format:\n `$hppwash <level> <cleanHP> <cleanMP> <class>`\n **Class Options:** thief, beginner, spearman, fighter, bowman, pirate, magician')
            .then(msg => {
              msg.delete(10000)
            })
        }else{
            args[3]=args[3].toLowerCase();
            // inside a command, event listener, etc. at the top of your file

            /* MULTIBRANCH IF-ELSE STATEMENTS TO CATCH ERRORS */
            if(args.length==4){
                if(Math.round(args[0]) < 1 || Math.round(args[0])>200 || isNaN(args[0])){
                    message.reply("Your level must be an integer and cannot be below 1 or above 200. Please try again.")
                    .then(msg => {
                      msg.delete(10000)
                    })                
                }else if (args[1]>30000 || args[1]<10 || isNaN(args[1])){
                    message.reply("Your HP must be an integer and cannot be below 10 or above 30,000. Please try again.")
                    .then(msg => {
                      msg.delete(10000)
                    })                
                }else if(args[2]<=5 || args[2]>30000 || isNaN(args[2])){
                    message.reply("Your MP must be an integer and cannot be below 5 or above 30,000. Please try again.")
                    .then(msg => {
                      msg.delete(10000)
                    })                
                }else if(!isNaN(args[3])){
                    message.reply("Your class description has to be a valid word.")
                    .then(msg => {
                      msg.delete(10000)
                    })                
                }else if((args[3] == "thief")){
                    const baseHP=(args[0] * 20) +378;
                    const baseMP= (14 * parseInt(args[0])) + 148;
                    const washableMP=parseInt(args[2])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/12);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                    const maxHP=30000;
                    const hpNeededToMax= maxHP-args[1];
                    const aprNeeded=Math.floor(hpNeededToMax/18);
            
                    if(args[1]<baseHP){
                        message.reply("Your Minimum HP must be at least " + baseHP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })
                    }else if(args[2]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })                    
                    }else{
                        const Discord = require('discord.js');
                        const exampleEmbed = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Level ' + args[0] +  " Thief")
                            .setDescription('The link above will take you to the voting page.\nThief +16~20 HP -12MP')
                            .addField('Extra MP:', 'Your extra MP is   \`' + washableMP + '\`.\nYou have  \`'+ hpNeededToMax + '\` hp away from hitting 30,000.\n')
                            //.addBlankField() OPTIONAL UI
                            .addField('Your HP:', args[1], true)
                            .addField('Your MP:', args[2], true)
                            .addField('AP Resets:', Math.floor(howManyWashesCanIDo), true)
                            .addField('NX Total:', (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), true)
                            .addField('Vote(s) needed:', Math.ceil(votingDays), true)
                            .addField('Best Case Scenario:', 20 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('Worst Case Scenario:', 16 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('You Will Need on AVERAGE:', "\`"+ aprNeeded + '\` AP resets to reach 30k HP', true)

                            .setURL('https://mapleroyals.com/?page=vote')
                            .setTimestamp()
                            .setFooter('HP Washing Calculator');
                        message.reply(exampleEmbed);
                    }
                }else if((args[3] == "beginner")){
                    const baseHP= (args[0] * 12) + 50;
                    const baseMP= (10 * parseInt(args[0])) + 2;
                    const washableMP=parseInt(args[2])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/8);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                    const maxHP=30000;
                    const hpNeededToMax= maxHP-args[1];
                    const aprNeeded=Math.floor(hpNeededToMax/10);

                    if(args[1]<baseHP){
                        message.reply("Your Minimum HP must be at least " + baseHP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })
                    }else if(args[2]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })                    
                    }else{
                        const Discord = require('discord.js');
                        const exampleEmbed = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Level ' + args[0] +  " Beginner")
                            .setDescription('The link above will take you to the voting page.\nBeginner: +8~12HP -8MP')
                            .addField('Extra MP:', 'Your extra MP is   \`' + washableMP + '\`.\nYou have  \`'+ hpNeededToMax + '\` hp away from hitting 30,000.\n')
                            //.addBlankField() OPTIONAL UI
                            .addField('Your HP:', args[1], true)
                            .addField('Your MP:', args[2], true)
                            .addField('AP Resets:', Math.floor(howManyWashesCanIDo), true)
                            .addField('NX Total:', (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), true)
                            .addField('Vote(s) needed:', Math.ceil(votingDays), true)
                            .addField('Best Case Scenario:', 12 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('Worst Case Scenario:', 8 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('You Will Need on AVERAGE:', "\`"+ aprNeeded + '\` AP resets to reach 30k HP', true)

                            .setURL('https://mapleroyals.com/?page=vote')
                            .setTimestamp()
                            .setFooter('HP Washing Calculator');
                        message.reply(exampleEmbed);
                    }
                }else if((args[3] == "spearman")){
                    const baseHP=(args[0] * 24) + 172;
                    const baseMP= (4 * parseInt(args[0])) + 156;
                    const washableMP=parseInt(args[2])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/4);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                    const maxHP=30000;
                    const hpNeededToMax= maxHP-args[1];
                    const aprNeeded=Math.floor(hpNeededToMax/52);

                    if(args[1]<baseHP){
                        message.reply("Your Minimum HP must be at least " + baseHP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })
                    }else if(args[2]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })                    
                    }else{
                        const Discord = require('discord.js');
                        const exampleEmbed = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Level ' + args[0] +  " Spearman")
                            .setDescription('The link above will take you to the voting page.\nWarrior +50~54HP -4MP')
                            .addField('Extra MP:', 'Your extra MP is   \`' + washableMP + '\`.\nYou have  \`'+ hpNeededToMax + '\` hp away from hitting 30,000.\n')
                            //.addBlankField() OPTIONAL UI
                            .addField('Your HP:', args[1], true)
                            .addField('Your MP:', args[2], true)
                            .addField('AP Resets:', Math.floor(howManyWashesCanIDo), true)
                            .addField('NX Total:', (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), true)
                            .addField('Vote(s) needed:', Math.ceil(votingDays), true)
                            .addField('Best Case Scenario:', 54 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('Worst Case Scenario:', 50 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('You Will Need on AVERAGE:', "\`"+ aprNeeded + '\` AP resets to reach 30k HP', true)

                            .setURL('https://mapleroyals.com/?page=vote')
                            .setTimestamp()
                            .setFooter('HP Washing Calculator');
                        message.reply(exampleEmbed);
                    }
                }else if((args[3] == "fighter")){
                    const baseHP=(args[0] * 24) + 472;
                    const baseMP= (4 * parseInt(args[0])) + 56;
                    const washableMP=parseInt(args[2])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/4);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                    const maxHP=30000;
                    const hpNeededToMax= maxHP-args[1];
                    const aprNeeded=Math.floor(hpNeededToMax/52);

                    if(args[1]<baseHP){
                        message.reply("Your Minimum HP must be at least " + baseHP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })
                    }else if(args[2]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })                    
                    }else{
                        const Discord = require('discord.js');
                        const exampleEmbed = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Level ' + args[0] +  " Fighter")
                            .setDescription('The link above will take you to the voting page.\nWarrior +50~54HP -4MP')
                            .addField('Extra MP:', 'Your extra MP is   \`' + washableMP + '\`.\nYou have  \`'+ hpNeededToMax + '\` hp away from hitting 30,000.\n')
                            //.addBlankField() OPTIONAL UI
                            .addField('Your HP:', args[1], true)
                            .addField('Your MP:', args[2], true)
                            .addField('AP Resets:', Math.floor(howManyWashesCanIDo), true)
                            .addField('NX Total:', (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), true)
                            .addField('Vote(s) needed:', Math.ceil(votingDays), true)
                            .addField('Best Case Scenario:', 54 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('Worst Case Scenario:', 50 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('You Will Need on AVERAGE:', "\`"+ aprNeeded + '\` AP resets to reach 30k HP', true)

                            .setURL('https://mapleroyals.com/?page=vote')
                            .setTimestamp()
                            .setFooter('HP Washing Calculator');
                        message.reply(exampleEmbed);
                    }
                }else if((args[3] == "bowman")){
                    const baseHP=(args[0] * 20) +378;
                    const baseMP= (14 * parseInt(args[0])) + 148;
                    const washableMP=parseInt(args[2])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/12);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                    const maxHP=30000;
                    const hpNeededToMax= maxHP-args[1];
                    const aprNeeded=Math.floor(hpNeededToMax/18);

                    if(args[1]<baseHP){
                        message.reply("Your Minimum HP must be at least " + baseHP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })
                    }else if(args[2]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })                    
                    }else{
                        const Discord = require('discord.js');
                        const exampleEmbed = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Level ' + args[0] +  " Bowman")
                            .setDescription('The link above will take you to the voting page.\nBowman +16~20 HP -12MP')
                            .addField('Extra MP:', 'Your extra MP is   \`' + washableMP + '\`.\nYou have  \`'+ hpNeededToMax + '\` hp away from hitting 30,000.\n')
                            //.addBlankField() OPTIONAL UI
                            .addField('Your HP:', args[1], true)
                            .addField('Your MP:', args[2], true)
                            .addField('AP Resets:', Math.floor(howManyWashesCanIDo), true)
                            .addField('NX Total:', (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), true)
                            .addField('Vote(s) needed:', Math.ceil(votingDays), true)
                            .addField('Best Case Scenario:', 20 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('Worst Case Scenario:', 16 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('You Will Need on AVERAGE:', "\`"+ aprNeeded + '\` AP resets to reach 30k HP', true)

                            .setURL('https://mapleroyals.com/?page=vote')
                            .setTimestamp()
                            .setFooter('HP Washing Calculator');
                        message.reply(exampleEmbed);
                    }
                }else if((args[3] == "pirate")){
                    const baseHP=(args[0] * 22) + 380;
                    const baseMP= (18 * parseInt(args[0])) + 111;
                    const washableMP=parseInt(args[2])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/16);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                    const maxHP=30000;
                    const hpNeededToMax= maxHP-args[1];
                    const aprNeededBucc=Math.floor(hpNeededToMax/38);
                    const aprNeededSair=Math.floor(hpNeededToMax/18);

                    if(args[1]<baseHP){
                        message.reply("Your Minimum HP must be at least " + baseHP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })
                    }else if(args[2]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })                    
                    }else{
                        const Discord = require('discord.js');
                        const exampleEmbed = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Level ' + args[0] +  " Pirate")
                            .setDescription('The link above will take you to the voting page.\n Pirate +16~20HP (+36~40HP for Brawlers) -16MP')
                            .addField('Extra MP:', 'Your extra MP is   \`' + washableMP + '\`.\nYou have  \`'+ hpNeededToMax + '\` hp away from hitting 30,000.\n')
                            //.addBlankField() OPTIONAL UI
                            .addField('Your HP:', args[1], true)
                            .addField('Your MP:', args[2], true)
                            .addField('AP Resets:', Math.floor(howManyWashesCanIDo), true)
                            .addField('NX Total:', (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), true)
                            .addField('Vote(s) needed:', Math.ceil(votingDays), true)
                            .addField('Classes:', 'Brawler/Gunslinger', true)
                            .addField('(Brawler) Best Case Scenario:', 40 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('(Brawler) Worst Case Scenario:', 36 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('(Gun) Best Case Scenario:', 20 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('(Gun) Worst Case Scenario:', 16 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('(Brawler) You Will Need on AVERAGE:', "\`"+ aprNeededBucc + '\` AP resets to reach 30k HP', true)
                            .addField('(Gun) You Will Need on AVERAGE:', "\`"+ aprNeededSair + '\` AP resets to reach 30k HP', true)

                            .setURL('https://mapleroyals.com/?page=vote')
                            .setTimestamp()
                            .setFooter('HP Washing Calculator');
                        message.reply(exampleEmbed);
                    }
                }else if((args[3] == "magician")){
                    const baseHP=(args[0] * 10) + 64;
                    const baseMP= (22 * parseInt(args[0])) + 488;
                    const washableMP=parseInt(args[2])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/90);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                    const maxHP=30000;
                    const hpNeededToMax= maxHP-args[1];
                    const aprNeeded=Math.floor(hpNeededToMax/8);

                    if(args[1]<baseHP){
                        message.reply("Your Minimum HP must be at least " + baseHP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })
                    }else if(args[2]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                            msg.delete(10000)
                        })                    
                    }else{
                        const Discord = require('discord.js');
                        const exampleEmbed = new Discord.RichEmbed()
                            .setColor('#0099ff')
                            .setTitle('Level ' + args[0] +  " Magician")
                            .setDescription('The link above will take you to the voting page.\n Magician +6~10Hp -90MP')
                            .addField('Extra MP:', 'Your extra MP is   \`' + washableMP + '\`.\nYou have  \`'+ hpNeededToMax + '\` hp away from hitting 30,000.\n')
                            //.addBlankField() OPTIONAL UI
                            .addField('Your HP:', args[1], true)
                            .addField('Your MP:', args[2], true)
                            .addField('AP Resets:', Math.floor(howManyWashesCanIDo), true)
                            .addField('NX Total:', (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), true)
                            .addField('Vote(s) needed:', Math.ceil(votingDays), true)
                            .addField('Best Case Scenario:', 10 * howManyWashesCanIDo +' \`HP gain\`', true)
                            .addField('Worst Case Scenario:', 6 * howManyWashesCanIDo + ' \`HP gain\`', true)
                            .addField('You Will Need on AVERAGE:', "\`"+ aprNeeded + '\` AP resets to reach 30k HP', true)

                            .setURL('https://mapleroyals.com/?page=vote')
                            .setTimestamp()
                            .setFooter('HP Washing Calculator');
                        message.reply(exampleEmbed);
                    }
                }else{
                    message.channel.send("There was an error. Please ensure that your command is the in following format:\n `$hppwash <level> <cleanHP> <cleanMP> <class>`\n**Class Options:** thief, beginner, spearman, fighter, bowman, pirate, magician");
                }
            }else{
                message.channel.send("There was an error. Please ensure that your command is the in following format:\n `$hppwash <level> <cleanHP> <cleanMP> <class>`\n**Class Options:** thief, beginner, spearman, fighter, bowman, pirate, magician");
            }
        }
        
	},
};