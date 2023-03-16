## Shooter Class Documentation

The `Shooter` class is a TypeScript class that extends the built-in `Events` module. It contains methods to simulate a shooting game between two Discord guild members.

### Constructor

The constructor method initializes an instance of the `Shooter` class with the following parameters:

- `opponent`: A required parameter of type `GuildMember` representing the opponent in the game.
- `fighter`: A required parameter of type `GuildMember` representing the fighter in the game.
- `interaction`: An optional parameter of type `CommandInteraction` representing the interaction object if the game is played via a Discord slash command.
- `message`: An optional parameter of type `Message` representing the message object if the game is played via a Discord message.
- `boost`: A required parameter of type `boolean` indicating if the player has a boost in the game.
- `isSlash`: An optional parameter of type `boolean` indicating if the game is played via a Discord slash command. Default value is `false`.
- `major`: An optional parameter of type `string` representing the major of the fighter. Default value is `"Lt Yung"`.

### Methods

#### `send(content: string): Promise<void>`

This method sends a message to the channel where the game was initiated. It takes in one required parameter:

- `content`: A string representing the content of the message to be sent.

Returns a `Promise` that resolves to `void`.

#### `start(): Promise<void>`

This method simulates the shooting game between the two players and sends a message indicating the winner. It generates random numbers to determine the winner based on the odds of winning determined by the `boost` parameter.

Returns a `Promise` that resolves to `void`.

### Properties

The `Shooter` class has the following properties:

- `opponent`: A readonly property of type `GuildMember` representing the opponent in the game.
- `fighter`: A readonly property of type `GuildMember` representing the fighter in the game.
- `interaction`: A readonly property of type `CommandInteraction` or `undefined` representing the interaction object if the game is played via a Discord slash command.
- `message`: A readonly property of type `Message` or `undefined` representing the message object if the game is played via a Discord message.
- `boost`: A readonly property of type `boolean` indicating if the player has a boost in the game.
- `isSlash`: A readonly property of type `boolean` indicating if the game is played via a Discord slash command.
- `major`: An optional readonly property of type `string` representing the major of the fighter. Default value is `"Lt Yung"`.
