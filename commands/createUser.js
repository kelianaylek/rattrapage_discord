const Discord = require('discord.js');
const mySqlConnector = require('../mySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, arguments) => {

    if(arguments[0] != null && Number.isInteger(parseInt(arguments[1]))){
        let sql = 'INSERT INTO users (name, project_id) VALUES (' + "'" +arguments[0] + "'" + ', ' + "'" +arguments[1] + "'" + ')';
        await mySqlConnector.executeQuery(sql);
        await message.channel.send(`The ${arguments[0]} user has been created and assigned to project ${arguments[1]}`);
    }else{
        await message.channel.send(`Please add a user name and a project id`);
    }

};

module.exports.name = 'createUser'