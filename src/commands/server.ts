import { SlashCommandBuilder } from 'discord.js';
import type { ChatInputCommandInteraction } from 'discord.js';
import { Command } from './command';

export class ServerCommand extends Command {
	private static NAME = 'server';
	constructor() {
		super(
			new SlashCommandBuilder().setName(ServerCommand.NAME).setDescription('Provides information about the server.')
		);
	}

	async execute(interaction: ChatInputCommandInteraction<'cached'>): Promise<void> {
		await interaction.reply(
			'This server is ' + interaction.guild.name + ' and it was created ' + interaction.guild.createdAt
		);
	}
}
