import { REST, RESTPostAPIChatInputApplicationCommandsJSONBody, Routes } from 'discord.js';
import { token, clientId, guildId } from '@root/config.json';
import { Commands } from '@app/commands';

const rest = new REST().setToken(token);

(async () => {
	const commands = Commands.reduce<RESTPostAPIChatInputApplicationCommandsJSONBody[]>(
		(list, command) => list.concat(command.data.toJSON()),
		[]
	);
	try {
		console.log(clientId);
		console.log(guildId);
		console.log('Started refreshing ', Commands.size, ' application (/) commands.');

		const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

		console.log(data);
	} catch (error) {
		console.error(error);
	}
})();
