import { PingCommand } from './ping';
import { UserCommand } from './user';
import { ServerCommand } from './server';
import { Command } from './command';
import { Collection } from 'discord.js';

const CommandList: Command[] = [new UserCommand(), new PingCommand(), new ServerCommand()];

export const Commands: Collection<string, Command> = CommandList.reduce(
	(collection: Collection<string, Command>, command: Command) => collection.set(command.name, command),
	new Collection<string, Command>()
);

export { Command } from './command';
