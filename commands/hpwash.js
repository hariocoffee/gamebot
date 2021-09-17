module.exports = {
	name: 'hpwash',
    description: 'This command allows the users to input arguments in order to figure out the amount of times they are able to reset MP into HP.\n The format goes as follows: \`$hpwash <level> <cleanMP> <class>\`\n\n __**Tip:**__\nThe MaxHP and MaxMP cap at 30,000 while the base is 10 and 5, respectively.\n__**Note:**__\nCleanHP and CleanMP are your BASE hp and mp requirements. This means that any hp or mp obtained from equips will NOT be part of this.\n__**Available <class> to call:**__\n-Beginner\n-Spearman\n-Fighter\n-Thief\n-Bowman\n-Pirate\n-Magician',
    args: true,
	execute(message, args) {
        if(args.length<3){
            message.reply('There was an error. Please ensure that your command is the in following format:\n \`$hppwash <level> <cleanHP> <cleanMP> <class>\`')
            .then(msg => {
              msg.delete(10000)
            })
            
        }else{
            args[2]=args[2].toLowerCase();
            if(!args.length) {
                return message.channel.send(`Please use this command in the right format, ${message.author}!`);
            } 

            /* MULTIBRANCH IF-ELSE STATEMENTS TO CATCH ERRORS */
            if(args.length==3){
                if(args[0] < 1 || args[0]>200 || isNaN(args[0])){
                    message.reply("Your level must be an integer and cannot be below 1 or above 200. Please try again.")
                    .then(msg => {
                      msg.delete(10000)
                    })
                }else if(args[1]<=5 || args[1]>30000 || isNaN(args[1])){
                    message.reply("Your MP must be an integer and cannot be below 5 or above 30,000. Please try again.")
                    .then(msg => {
                      msg.delete(10000)
                    })
                }else if(!isNaN(args[2])){
                    message.reply("Your class description has to be a valid word.")
                    .then(msg => {
                      msg.delete(10000)
                    })
                }else if((args[2] == "thief")){
                    const baseMP= (14 * parseInt(args[0])) + 148;
                    const washableMP=parseInt(args[1])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/12);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                
                    const extraMP= "Your extra MP is \`" +  washableMP + "\`.";
                    const hpWashMessage="As a Level  **" + args[0] + "** thief, you are able to use:\n **AP Reset(s):**\t\t\t\t\t \`" +
                        Math.floor(howManyWashesCanIDo) + "\`\n **NX Total:**\t\t\t\t \`" + 
                        (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\` \n **Voting Days:**\t\t\t\t\t \`" + Math.ceil(votingDays)
                        + "\`";

                    if(args[1]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                          msg.delete(10000)
                        })                    
                    }else{
                        message.reply(extraMP);
                        message.channel.send(hpWashMessage);
                    }
                }else if((args[2] == "beginner")){
                    const baseMP= (10 * parseInt(args[0])) + 2;
                    const washableMP=parseInt(args[1])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/8);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                
                    const extraMP= "Your extra MP is \`" +  washableMP + "\`.";
                    const hpWashMessage="As a Level  **" + args[0] + "** beginner, you are able to use:\n **AP Reset(s):**\t\t\t\t\t \`" +
                        Math.floor(howManyWashesCanIDo) + "\`\n **NX Total:**\t\t\t\t \`" + 
                        (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\` \n **Voting Days:**\t\t\t\t\t \`" + Math.ceil(votingDays)
                        + "\`";

                        if(args[1]<washableMP){
                            message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                            .then(msg => {
                              msg.delete(10000)
                            })                    
                        }else{
                        message.reply(extraMP);
                        message.channel.send(hpWashMessage);
                    }
                }else if((args[2] == "spearman")){
                    const baseMP= (4 * parseInt(args[0])) + 156;
                    const washableMP=parseInt(args[1])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/4);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                
                    const extraMP= "Your extra MP is \`" +  washableMP + "\`.";
                    const hpWashMessage="As a Level  **" + args[0] + "** spearman, you are able to use:\n **AP Reset(s):**\t\t\t\t\t \`" +
                        Math.floor(howManyWashesCanIDo) + "\`\n **NX Total:**\t\t\t\t \`" + 
                        (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\` \n **Voting Days:**\t\t\t\t\t \`" + Math.ceil(votingDays)
                        + "\`";

                    if(args[1]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                          msg.delete(10000)
                        })                    
                    }else{
                        message.reply(extraMP);
                        message.channel.send(hpWashMessage);
                    }
                }else if((args[2] == "fighter")){
                    const baseMP= (4 * parseInt(args[0])) + 56;
                    const washableMP=parseInt(args[1])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/4);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                
                    const extraMP= "Your extra MP is \`" +  washableMP + "\`.";
                    const hpWashMessage="As a Level  **" + args[0] + "** fighter, you are able to use:\n **AP Reset(s):**\t\t\t\t\t \`" +
                        Math.floor(howManyWashesCanIDo) + "\`\n **NX Total:**\t\t\t\t \`" + 
                        (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\` \n **Voting Days:**\t\t\t\t\t \`" + Math.ceil(votingDays)
                        + "\`";

                    if(args[1]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                          msg.delete(10000)
                        })                    
                    }else{
                        message.reply(extraMP);
                        message.channel.send(hpWashMessage);
                    }
                }else if((args[2] == "bowman")){
                    const baseMP= (14 * parseInt(args[0])) + 148;
                    const washableMP=parseInt(args[1])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/12);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                
                    const extraMP= "Your extra MP is \`" +  washableMP + "\`.";
                    const hpWashMessage="As a Level  **" + args[0] + "** bowman, you are able to use:\n **AP Reset(s):**\t\t\t\t\t \`" +
                        Math.floor(howManyWashesCanIDo) + "\`\n **NX Total:**\t\t\t\t \`" + 
                        (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\` \n **Voting Days:**\t\t\t\t\t \`" + Math.ceil(votingDays)
                        + "\`";

                    if(args[1]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                          msg.delete(10000)
                        })                    
                    }else{
                        message.reply(extraMP);
                        message.channel.send(hpWashMessage);
                    }
                }else if((args[2] == "pirate")){
                    const baseMP= (18 * parseInt(args[0])) + 111;
                    const washableMP=parseInt(args[1])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/16);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                
                    const extraMP= "Your extra MP is \`" +  washableMP + "\`.";
                    const hpWashMessage="As a Level  **" + args[0] + "** pirate, you are able to use:\n **AP Reset(s):**\t\t\t\t\t \`" +
                        Math.floor(howManyWashesCanIDo) + "\`\n **NX Total:**\t\t\t\t \`" + 
                        (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\` \n **Voting Days:**\t\t\t\t\t \`" + Math.ceil(votingDays)
                        + "\`";

                    if(args[1]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                          msg.delete(10000)
                        })                    
                    }else{
                        message.reply(extraMP);
                        message.channel.send(hpWashMessage);
                    }
                }else if((args[2] == "magician")){
                    const baseMP= (22 * parseInt(args[0])) + 488;
                    const washableMP=parseInt(args[1])-baseMP;
                    const howManyWashesCanIDo=Math.floor(washableMP/90);
                    const howMuchNXDoINeed= howManyWashesCanIDo * 3100;
                    const votingDays= howMuchNXDoINeed/8000;
                
                    const extraMP= "Your extra MP is \`" +  washableMP + "\`.";
                    const hpWashMessage="As a Level  **" + args[0] + "** magician, you are able to use:\n **AP Reset(s):**\t\t\t\t\t \`" +
                        Math.floor(howManyWashesCanIDo) + "\`\n **NX Total:**\t\t\t\t \`" + 
                        (howMuchNXDoINeed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "\` \n **Voting Days:**\t\t\t\t\t \`" + Math.ceil(votingDays)
                        + "\`";

                    if(args[1]<baseMP){
                        message.reply("Your Minimum MP must be at least " + baseMP + ". Please try again.")
                        .then(msg => {
                          msg.delete(10000)
                        })
                    }else{
                        message.reply(extraMP);
                        message.channel.send(hpWashMessage);
                    }
                }else{
                    message.reply('There was an error. Please ensure that your command is the in following format:\n \`$hppwash <level> <cleanMP> <class>\`')
                    .then(msg => {
                      msg.delete(10000)
                    })
                }
            }else{
                message.reply('There was an error. Please ensure that your command is the in following format:\n \`$hppwash <level> <cleanMP> <class>\`')
                .then(msg => {
                  msg.delete(10000)
                })
            }
            /*
            //FOR TESTING PURPOSES ONLY: UNCOMMENT TO VIEW ARGUMENT INPUT
            message.channel.send(`Unit Testing Below:`);
            message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
            */
        }
	},
};