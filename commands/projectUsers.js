const Discord = require('discord.js');
const mySqlConnector = require('../mySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, arguments) => {

    if(arguments[0] != null){
        let sql = 'SELECT * FROM users WHERE project_id = ' + "'"+arguments[0]+"'";
        let projectUsers = await mySqlConnector.executeQuery(sql)
        let string = ''
        if(projectUsers.length !== 0){
            projectUsers.forEach(user =>
                string += user.name + ' | '
            );
            await message.channel.send(string);
        }else{
            await message.channel.send(`This project does not exist or no user is linked to it.`);
        }


    }else{
        await message.channel.send(`Please add a project id`);
    }



};

module.exports.name = 'projectUsers'