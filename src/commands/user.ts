import { SlashCommandBuilder } from 'discord.js';
import type { ChatInputCommandInteraction } from 'discord.js';
import { Command } from './command';

export class UserCommand extends Command {
	private static readonly NAME = 'user';
	constructor() {
		super(new SlashCommandBuilder().setName(UserCommand.NAME).setDescription('Provides information about the user.'));
	}
	async execute(interaction: ChatInputCommandInteraction<'cached'>): Promise<void> {
		await interaction.reply(
			'This command was run by ' + interaction.user.username + ' who joined on ' + interaction.member.joinedAt
		);
	}
}
