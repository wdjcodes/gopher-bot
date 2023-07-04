import type { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';

interface CommandInterface {
	name: string;
}

export abstract class Command implements CommandInterface {
	private _data: SlashCommandBuilder;
	readonly name: string;

	constructor(data: SlashCommandBuilder) {
		this._data = data;
		this.name = data.name;
	}

	public get data() {
		return this._data;
	}

	abstract execute(interaction: ChatInputCommandInteraction<'cached'>): Promise<void>;
}
