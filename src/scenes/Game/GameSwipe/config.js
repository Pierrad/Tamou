export const togglesConfig = (theme, onSelectGame) => [
	{
		id: 0,
		text: 'League of Legends',
		backgroundSelectedColor: theme.game,
		onPress: () => onSelectGame(0),
		borderColor: theme.game,
	},
	{
		id: 1,
		text: 'Valorant',
		backgroundSelectedColor: theme.game,
		onPress: () => onSelectGame(1),
		borderColor: theme.game,
	},
	{
		id: 2,
		text: 'Minecraft',
		backgroundSelectedColor: theme.game,
		onPress: () => onSelectGame(2),
		borderColor: theme.game,
	},
	{
		id: 3,
		text: 'Fortnite',
		backgroundSelectedColor: theme.game,
		onPress: () => onSelectGame(3),
		borderColor: theme.game,
	},
	{
		id: 4,
		text: 'WoW',
		backgroundSelectedColor: theme.game,
		onPress: () => onSelectGame(4),
		borderColor: theme.game,
	},
	{
		id: 5,
		text: 'Call of Duty',
		backgroundSelectedColor: theme.game,
		onPress: () => onSelectGame(5),
		borderColor: theme.game,
	}
]

	