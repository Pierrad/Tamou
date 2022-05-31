export const typeOfRanking = {
	'WOW': 'level',
	'LOL': 'rank',
	'COD': 'ratio',
	'FORTNITE': 'level',
	'MINECRAFT': null,
	'VALORANT': 'rank',
}

export const lolRanking = {
	'UNRANKED': 'rank_unranked',
	'IRON': 'rank_iron',
	'BRONZE': 'rank_bronze',
	'SILVER': 'rank_silver',
	'GOLD': 'rank_gold',
	'PLATINUM': 'rank_platinum',
	'DIAMOND': 'rank_diamond',
	'MASTER': 'rank_master',
	'CHALLENGER': 'rank_challenger'
}

export const lolBadgeTranslation = {
	'rank_unranked': '',
	'rank_iron': require('../assets/images/lol/rank_iron.png'),
	'rank_bronze': require('../assets/images/lol/rank_bronze.png'),
	'rank_silver': require('../assets/images/lol/rank_silver.png'),
	'rank_gold': require('../assets/images/lol/rank_gold.png'),
	'rank_platinum': require('../assets/images/lol/rank_platinum.png'),
	'rank_diamond': require('../assets/images/lol/rank_diamond.png'),
	'rank_master': require('../assets/images/lol/rank_master.png'),
	'rank_challenger': require('../assets/images/lol/rank_challenger.png'),
}

export const valorantRanking = {
	'UNRANKED': 'rank_unranked',
	'IRON': 'rank_iron',
	'BRONZE': 'rank_bronze',
	'SILVER': 'rank_silver',
	'GOLD': 'rank_gold',
	'PLATINUM': 'rank_platinum',
	'DIAMOND': 'rank_diamond',
	'IMMORTAL': 'rank_immortal',
	'RADIANT': 'rank_radiant',
}

export const valorantBadgeTranslation = {
	'rank_unranked': '',
	'rank_iron': require('../assets/images/valorant/rank_iron.png'),
	'rank_bronze': require('../assets/images/valorant/rank_bronze.png'),
	'rank_silver': require('../assets/images/valorant/rank_silver.png'),
	'rank_gold': require('../assets/images/valorant/rank_gold.png'),
	'rank_platinum': require('../assets/images/valorant/rank_platinum.png'),
	'rank_diamond': require('../assets/images/valorant/rank_diamond.png'),
	'rank_master': require('../assets/images/valorant/rank_immortal.png'),
	'rank_challenger': require('../assets/images/valorant/rank_radiant.png'),
}

export const rankingIntegerTranslation = {
	'rank_unranked': 0,
	'rank_iron': 1,
	'rank_bronze': 2,
	'rank_silver': 3,
	'rank_gold': 4,
	'rank_platinum': 5,
	'rank_diamond': 6,
	'rank_master': 7,
	'rank_challenger': 8,
	'rank_immortal': 7,
	'rank_radiant': 8,
}

export const rankingStringTranslation = {
	0: 'rank_unranked',
	1: 'rank_iron',
	2: 'rank_bronze',
	3: 'rank_silver',
	4: 'rank_gold',
	5: 'rank_platinum',
	6: 'rank_diamond',
	7: 'rank_master',
	8: 'rank_challenger',
}

export const gameTranslation = {
	'WOW': 'World of Warcraft',
	'LOL': 'League of Legends',
	'COD': 'Call of Duty',
	'FORTNITE': 'Fortnite',
	'MINECRAFT': 'Minecraft',
	'VALORANT': 'Valorant',
}

export const imageTranslation = {
	'LOL': 'https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg',
	'VALORANT': 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png',
	'MINECRAFT': 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg',
	'FORTNITE': 'https://cdn2.unrealengine.com/7up-v2-3840x2160-e11fc91a84d6.jpg',
	'WOW': 'https://image.jeuxvideo.com/images/pc/w/o/wowapc0f.jpg',
	'COD': 'https://xboxplay.games/uploadStream/16994.jpg',
}

export const gameToId = {
	'LOL': 0,
	'VALORANT': 1,
	'MINECRAFT': 2,
	'FORTNITE': 3,
	'WOW': 4,
	'COD': 5,
}

export const IdToGame = {
	0: 'LOL',
	1: 'VALORANT',
	2: 'MINECRAFT',
	3: 'FORTNITE',
	4: 'WOW',
	5: 'COD',
}
