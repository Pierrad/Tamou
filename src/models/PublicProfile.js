import { Platform } from 'react-native'
import { API_URL_ANDROID, APP_ENV } from '@env'

import i18n from '../i18n/i18n'

import { lolBadgeTranslation, rankingStringTranslation, valorantBadgeTranslation } from '../helpers/game'

export const PublicUser = (props) => {
	return {
		...props,
		firstname: props.firstname,
		lastname: props.lastname,
		username: props.username,
		image: props.imageProfile,
		orientation: props.orientation,
		gender: props.gender,
		publicID: props.publicId,
		tagline: props.tagline,
		avatar: Platform.OS === 'ios'
			? props.imageProfile
			: APP_ENV === 'local'
				? `${API_URL_ANDROID}/images/${props.imageProfile.split('/').pop()}`
				: props.imageProfile,
		gameSection: {
			games: props.gameSection.games.map((game) => {
				return {
					game: game.game,
					mood: game.mood,
					level: game.level || (game.rank && i18n.t(rankingStringTranslation[game.rank])) || game.ratio,
					...((game.game === 'LOL') && { badge: lolBadgeTranslation[rankingStringTranslation[game.rank]] }),
					...((game.game === 'VALORANT') && { badge: valorantBadgeTranslation[rankingStringTranslation[game.rank]] }),
				}
			})
		},
		loveSection: props.loveSection,
	}
}