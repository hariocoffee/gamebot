## A bot for players of MapleRoyals!

**This bot was created in early 2019, so some features may be outdated.**

**Edit:** A few changes have been made as of September 17, 2021.

[Github Profile] - (https://github.com/hariocoffee)

Feel free to use this as-is or customize it as much as you want in your Discord servers.

If you want to **contribute**, optimize, or add more to the bot, then feel free to open a [pull request](https://github.com/hariocoffee/gamebot/pulls)

## Features
- Hp Washing
- Guides
- Quick lookup
- Easy access to site
- Clean and minimal look

## Set-up (How To Use)

Before starting, download Node.js (https://nodejs.org/en/download/) as you will need it to make your bot work. 

You will also need a Discord account to activate this bot. 

1. Create the bot (or "applcation") on Discord. Head to https://discordapp.com/developers/applications/me, create and name your bot. 

2. Click *Bot* in the menu then click *Add Bot* under the *Build-a-Bot* option, then select your bot.

3. Access the bot's authorization token (Token: Click to Reveal) and remember to **NEVER** share this with anyone. 

4. Head over to *Bot* in the menu and then copy your Client ID under Client Information. Copy and paste your Client ID into this link below where CLIENTID will be replaced with the Client ID you just copied. (https://discordapp.com/oauth2/authorize?&client_id=CLIENTID&scope=bot&permissions=8)

After replacing the CLIENTID with your client ID number in the browser, hit enter and navigate it to a server of your choice.

5. Navigate to the repository you cloned and then `config.json` file to update your token that you copied from step 3. ({"token": YOURTOKENHERE})

From your command line, clone gamebot files:

```bash
# Clone this repository
$ git clone https://github.com/hariocoffee/gamebot

# Go into the repository
$ cd gamebot

# Run the bot
$ node index.js
```
## Technologies Used
- [Javascript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)

## Ending Note
If you have any cool ideas you'd like to add, then don't hestitate to open a [pull request](https://github.com/hariocoffee/gamebot/pulls)
