module.exports = {
    name: 'ask',
    args: true,
    description: 'On ask command, the bot will send message that asking the user to ask the question instead of empty help.',
    execute(client, message, args) {
        if (args.length != 0) {
            // Checking the first argument is not a Not-A-Number.
            if (!isNaN(args[0])) {
                // Checking the length of first argument is 18.
                if (args[0].length === 18) {
                    return message.channel.send(`<@${args[0]}>, Stop asking for help without a question. Ask for help with your question included and tag helpers for a quicker reply.`);
                }
            }
        }
    },
};