// Copyright (c) 2023 Northern Star
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { type Message, type GuildMember, TextChannel, CommandInteraction, EmbedBuilder } from "discord.js";
import Events from 'events'

export class Shooter extends Events {
    readonly opponent: GuildMember;
    readonly fighter: GuildMember;
    readonly interaction: CommandInteraction | undefined
    readonly message: Message | undefined;
    readonly boost: boolean;
    readonly isSlash: boolean;
    readonly major?: string | undefined;
    // readonly items: [];
    public constructor(options: {
        opponent: GuildMember,
        fighter: GuildMember,
        interaction?: CommandInteraction | undefined
        message?: Message | undefined,
        boost: boolean,
        isSlash?: boolean | undefined, 
        major?: string | undefined
    }) {
        if (!options.opponent) throw new TypeError(`NO_OPPONENT: An opponent was not specified.`);
        if (!options.fighter) throw new TypeError(`NO_FIGHTER: No fighter was specified.`);
        if (!options.message && !options.interaction) throw new TypeError(`MESSAGE_OR_INTERACTION_UNDEFINED: Message or interaction object isn't defined.`);
        if (!options.boost) throw new TypeError(`BOOST_UNDEFINED: A valid boolean wasn't provided for the boost option.`);
        if (typeof options.isSlash == "undefined") options.isSlash == false;
        if (!options.major) options.major == "Lt Yung"
        super()

        this.opponent = options.opponent;
        this.fighter = options.fighter;
        this.message = options.message;
        this.boost = options.boost;
        this.isSlash = options.isSlash!
        this.major = options.major;
    }
    async send(content: string) {
        if (this.isSlash) return await this.interaction!.editReply(content);
        else return await (this.message?.channel as TextChannel).send(content);
    };

    async start() {
        let odds: number;
        let win: boolean;
        if (this.boost) odds = 2; else odds = 5;
        const random = Math.round(Math.random() * odds);
        const random2 = Math.round(Math.random() * odds);

        if (random == random2) win = true; else win = false;
        let embed = new EmbedBuilder()
        .setTitle(`${this.major}'s ${win? "Won" : "Lost"}`)
    }


}

