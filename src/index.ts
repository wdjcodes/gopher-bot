import { Events, GatewayIntentBits } from 'discord.js';
import { GopherClient } from './gopher-client';
import { token } from '../config.json';

const client = new GopherClient({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
	console.log('Ready! Logged in as: ', c.user.tag);
});

client.on(Events.InteractionCreate, client.handleInteractionCreate);

client.login(token);
