const Discord = require('discord.js');
const mySqlConnector = require('../mySqlConnector');

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {Array<String>} arguments
 */
module.exports.run = async(client, message, arguments) => {

    let sql = 'SELECT * FROM users';
    let users = JSON.parse(JSON.stringify(await mySqlConnector.executeQuery(sql)))
    let string = ''

    if(users.length !== 0){
        users.forEach(user =>
            string += user.name + ' | '
    );
        await message.channel.send(string);
    }

};

module.exports.name = 'listUsers'