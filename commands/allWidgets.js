const Discord = require('discord.js');

module.exports = {
    name: 'allwidgets',
    args: true,
    description: 'This command will show you the all Packages/Objects related to your search.',
    execute(client, message, args) {
        //  Todo - Getting Data from API.
        const result = [];
        //  Todo - Getting Data from API.
        if (args[0] === 'help') {
            message.channel.send('**__Usage of allwidgets command__** \n \n Use this command to know all widgets which matches your search widget. \n > `!allwidgets <widget>` \n \n **__Eg__:** `!allwidgets hero`');
        }
        else {
            try {
                const allWidgets = client.flutterData.filter(d => d.name.toLowerCase().includes(args[0].toLowerCase()) && d.type === 'constructor');
                const [hrefs, names] = ['href', 'name'].map(p => allWidgets.map(td => td[p]));
                for (let i = 0; i < allWidgets.length; i++) {
                    const embededLinks = {
                        name: names[i],
                        value: client.docsLink + hrefs[i],
                    };
                    result.push(embededLinks);
                }
                const response = new Discord.MessageEmbed()
                    .setColor('#2ECC71')
                    .setTitle(`All results for ${allWidgets[0].name} Widget/Object`)
                    .addFields(result);
                message.channel.send(allWidgets.length != 0 ? response : client.notFoundMsg);
                return;
            }
            catch (err) {
                return (typeof allWidgets !== undefined) ?
                    message.channel.send(client.notFoundMsg) : console.log('❌️ ' + err.message);
            }
        }
    },
};