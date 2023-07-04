import { SlashCommandBuilder } from 'discord.js';
import type { ChatInputCommandInteraction } from 'discord.js';
import { Command } from './command';

export class PingCommand extends Command {
	private static NAME = 'ping';
	constructor() {
		super(new SlashCommandBuilder().setName(PingCommand.NAME).setDescription('Replies with Pong!'));
	}

	async execute(interaction: ChatInputCommandInteraction<'cached'>): Promise<void> {
		await interaction.reply('Pong!');
	}
}
