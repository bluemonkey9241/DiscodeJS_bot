require('dotenv').config()

const { Client } = require('discord.js')
const client = new Client();

// listen to event
client.on('ready', () => {
    console.log(`${client.user.username}`, 'has logged in',);
})

client.login(process.env.DISCODE_JS_BOT_TOKEN)
