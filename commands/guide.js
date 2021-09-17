module.exports = {
	name: 'guide',
    description: 'Returns the most liked guide of your argument choice.\n Available arguments to call:\n-Bishop:white_small_square: bs\n-IceLightning:white_small_square: il:white_small_square: i/l\n-FirePoison:white_small_square: fp:white_small_square: f/p\n-Hero\n-DarkKnight:white_small_square: drk:white_small_square: dk\n-Paladin:white_small_square: pally:white_small_square: pal\n-NightLord:white_small_square: nl:white_small_square: sin\n-Shadower:white_small_square: cb:white_small_square: shad\n-Bowmaster:white_small_square: bm\n-Marksman:white_small_square: mm:white_small_square: xbow\n-Buccaneer:white_small_square: bucc:white_small_square: si\n-Corsair:white_small_square: sair\n-Beginner:white_small_square: beg\n-APQ\n-Scrolls:white_small_square: Scroll',
    	execute(message, args) {

        //LIST OF ALL COMMAND NAMES
        const returnMessage ="Available arguments to call:\n-Bishop:white_small_square: bs\n-IceLightning:white_small_square: il:white_small_square: i/l\n-FirePoison:white_small_square: fp:white_small_square: f/p\n-Hero\n-DarkKnight:white_small_square: drk:white_small_square: dk\n-Paladin:white_small_square: pally:white_small_square: pal\n-NightLord:white_small_square: nl:white_small_square: sin\n-Shadower:white_small_square: cb:white_small_square: shad\n-Bowmaster:white_small_square: bm\n-Marksman:white_small_square: mm:white_small_square: xbow\n-Buccaneer:white_small_square: bucc:white_small_square: si\n-Corsair:white_small_square: sair\n-Beginner:white_small_square: beg\n-APQ\n-Scrolls:white_small_square: Scroll";
        if(args.length<1){
            message.reply('You must have one and only one argument without any spaces! Please utilize the command `$guide [argument]`. You may access the manual with `$help guide` OR utilize the class options below: \n\n' + returnMessage)
                    .then(msg => {
                      msg.delete(10000)
                    })
        }else{
            args[0]=args[0].toLowerCase();

            if(args[0]=="bishop" || args[0]=="bs"){
                message.channel.send('Here is an in-depth Bishop Guide: https://mapleroyals.com/forum/threads/bishops-guide-2019.125406/');
            }else if(args[0]=="bishop" || args[0]=="bs"){
                message.channel.send('Here is an in-depth Bishop Guide: https://mapleroyals.com/forum/threads/bishops-guide-2019.125406/');
            }else if(args[0]=="icelightning" || args[0]=="il" || args[0]=="i/l"){
                message.channel.send('Here is an in-depth I/L Guide: https://mapleroyals.com/forum/threads/a-new-adventure-begins-ice-lightning-guide.51505/');
            }else if(args[0]=="firepoison" || args[0]=="fp" || args[0]=="f/p"){
                message.channel.send('Here is an in-depth F/P Guide: https://mapleroyals.com/forum/threads/the-best-fire-poison-guide-there-was-is-and-ever-will-be.27168/');
            }else if(args[0]=="hero"){
                message.channel.send('Here is an in-depth Hero Guide: https://mapleroyals.com/forum/threads/hero-guide.57080/');
            }else if(args[0]=="darkknight" || args[0]=="drk" || args[0]=="dk"){
                message.channel.send('Here is an in-depth Dark Knight Guide: https://mapleroyals.com/forum/threads/into-darkness-dark-knight-guide.131788/');
            }else if(args[0]=="paladin" || args[0]=="pally" || args[0]=="pal"){
                message.channel.send('Here is an in-depth Paladin Guide: https://mapleroyals.com/forum/threads/smashing-a-guide-to-paladins.118048/');
            }else if(args[0]=="nightlord" || args[0]=="nl" || args[0]=="sin"){
                message.channel.send('Here is an in-depth Night Lord Guide: https://mapleroyals.com/forum/threads/a-comprehensive-night-lord-guide.23303/');
            }else if(args[0]=="shadower" || args[0]=="shad" || args[0]=="cb"){
                message.channel.send('Here is an in-depth Shadower Guide: https://mapleroyals.com/forum/threads/in-depth-shadower-guide.8122/');
            }else if(args[0]=="bowmaster" || args[0]=="bm"){
                message.channel.send('Here is an in-depth Bowmaster Guide: https://mapleroyals.com/forum/threads/new-source-nanys-bowmaster-guide-road-to-lord-sniper.121936/');
            }else if(args[0]=="marksman" || args[0]=="mm" || args[0]=="xbow"){
                message.channel.send('Here is an in-depth Marksman Guide: https://mapleroyals.com/forum/threads/a-comprehensive-guide-to-marksman.89785/');
            }else if(args[0]=="buccaneer" || args[0]=="bucc" || args[0]=="si"){
                message.channel.send('Here is an in-depth Buccaneer Guide: https://mapleroyals.com/forum/threads/the-beast-buccaneer-guide-updated-to-59.62268/');
            }else if(args[0]=="corsair" || args[0]=="sair"){
                message.channel.send('Here is an in-depth Corsair Guide: https://mapleroyals.com/forum/threads/a-comprehensive-corsair-guide.122934/');
            }else if(args[0]=="beginner" || args[0]=="beg"){
                message.channel.send('Here is an in-depth Beginner Guide: https://mapleroyals.com/forum/threads/disorienteds-permanent-beginner-guide.67505/');
            }else if(args[0]=="mapleroyals-bot"){
                message.channel.send('You found the hidden command! In order to understand how to use the bot, please resource the following command: \`$help [command name]\`');
            }else if(args[0]=="scrolls" || args[0]=="scroll"){
                message.channel.send('Here\'s the link to the Scroll Guide:\nhttps://docs.google.com/spreadsheets/d/1IihQJyMnLJjj7NMhWV_rInWISFcm3BXMrJgVGVtqi9s/edit#gid=0');
            }else if(args[0]=="apq"){
                message.channel.send('Here\'s the link to the APQ Guide:\nhttps://mapleroyals.com/forum/threads/amoria-party-quest-apq.31743/');
            }else{
                message.reply('That is not a valid argument. Please resource `$help [command name]` to get info on a specific command!\n\n' + returnMessage)
                    .then(msg => {
                      msg.delete(10000)
                    })
            }
        }
	},
};

