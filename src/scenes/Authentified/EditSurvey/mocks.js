export const questionsMock = (section) => [
	{
		id: 0,
		label: 'Je suis intéressé par...',
		value: section.orientation === 'mf' ? ['male', 'female'] : [section.orientation],
		options: [
			{
				label: 'Femme',
				value: 'female',
			},
			{
				label: 'Homme',
				value: 'male',
			},
		]
	},
	{
		id: 1,
		label: 'Je recherche...',
		value: section.search,
		options: [
			{
				label: 'L\'Amour',
				value: 'love',
			},
			{
				label: 'La perle rare',
				value: 'life',
			},
			{
				label: 'Un plan d\'un soir',
				value: 'night',
			},
		]
	},
	{
		id: 2,
		label: 'Je suis plutôt...',
		value: section.mood,
		options: [
			{
				label: 'Netflix & Chill',
				value: 'netflix',
			},
			{
				label: 'Sortie en boîte',
				value: 'nightclub',
			},
			{
				label: 'Soirée entre amis',
				value: 'friend',
			},
			{
				label: 'Sortie amoureuse',
				value: 'love',
			},
		]
	},
	{
		id: 3,
		label: 'Pour mes vacances, je préfère...',
		value: section.holiday,
		options: [
			{
				label: 'Ski à la montagne',
				value: 'mountain',
			},
			{
				label: 'Bronzette à la plage',
				value: 'beach',
			},
			{
				label: 'Rando en forêt',
				value: 'forest',
			},
			{
				label: 'Chill à la maison',
				value: 'house',
			},
		]
	},
	{
		id: 4,
		label: 'Un fumeur, pour moi, c\'est...',
		value: section.smoke,
		options: [
			{
				label: 'Redibitoire',
				value: 'no',
			},
			{
				label: 'Pas de soucis',
				value: 'yes',
			},
		]
	},
	{
		id: 5,
		label: 'On regarde quoi ce soir...',
		value: section.movie,
		options: [
			{
				label: 'Titanic',
				value: 'titanic',
			},
			{
				label: 'Lalaland',
				value: 'lalaland',
			},
			{
				label: 'Fast And Furious',
				value: 'faf',
			},
			{
				label: 'Avengers',
				value: 'avengers',
			},
			{
				label: 'Raiponce',
				value: 'raiponce',
			},
			{
				label: '50 nuances de gray 😏',
				value: 'shades',
			},
		]
	},
]