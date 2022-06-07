import { lolRanking, valorantRanking } from '../../../helpers/game'
import i18n from '../../../i18n/i18n'

export const games = (theme) => [
	{
		text: 'COD',
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'COD',
	},
	{
		text: 'World of warcraft',
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'WOW',
	},
	{
		text: 'League of Legends',
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'LOL',
	},
	{
		text: 'Fortnite',
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'FORTNITE',
	},
	{
		text: 'Minecraft',
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'MINECRAFT',
	},
	{
		text: 'Valorant',
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'VALORANT',
	},
]

export const rankTemplate = (theme, text, value) => {
	return {
		text,
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value,
	}
}

export const ranking = (game, theme) => {
	switch(game) {
	case 'COD':
		return {
			'text': i18n.t('ratio'),
			'value': '',
		}
	case 'WOW':
		return {
			'text': i18n.t('level'),
			'value': '',
		}
	case 'LOL':
		return Object.values(lolRanking).map((values) => rankTemplate(theme, i18n.t(values), values))
	case 'FORTNITE':
		return {
			'text': i18n.t('level'),
			'value': '',
		}
	case 'MINECRAFT':
		return null
	case 'VALORANT':
		return Object.values(valorantRanking).map((values) => rankTemplate(theme, i18n.t(values), values))
	}
}

export const typeOfPlayer = (theme) => [
	{
		text: i18n.t('game_edit_value_mood_chill'),
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'chill',
	},
	{
		text: i18n.t('game_edit_value_mood_tryhard'),
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'tryhard',
	},
	{
		text: i18n.t('game_edit_value_mood_fun'),
		backgroundSelectedColor: theme.pureBlack,
		textColor: theme.pureWhite,
		value: 'fun',
	},
]