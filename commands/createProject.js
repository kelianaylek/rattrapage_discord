const Discord = require('discord.js');
const mySqlConnector = require('../mySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, arguments) => {

    if(arguments[0] != null){
        let sql = 'INSERT INTO projects (name) VALUES (' + "'" +arguments[0] + "'" + ')';
        await mySqlConnector.executeQuery(sql);
        await message.channel.send(`The ${arguments[0]} project has been created.`);
    }else{
        await message.channel.send(`Please add a project name`);
    }



};

module.exports.name = 'createProject'