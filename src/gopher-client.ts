import { ChatInputCommandInteraction, Client, Interaction } from 'discord.js';
import { Commands } from './commands';
export class GopherClient extends Client {
	private commands = Commands;

	async handleInteractionCreate(interaction: Interaction) {
		if (interaction.isChatInputCommand()) {
			await this.handleChatInputCommand(interaction as ChatInputCommandInteraction<'cached'>);
		}
	}

	async handleChatInputCommand(interaction: ChatInputCommandInteraction<'cached'>) {
		const command = this.commands.get(interaction.commandName);

		if (!command) {
			console.error('No Command matching ', interaction.commandName);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	}
}
