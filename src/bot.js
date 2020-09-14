require('dotenv').config()

const {Client} = require('discord.js')
const client  = new Client();

client.login(process.env.DISCODE_JS_BOT_TOKEN)
