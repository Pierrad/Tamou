import i18n from '../../../i18n/i18n'

export const questionsMock = (section) => [
	{
		id: 0,
		label: i18n.t('love_edit_title_orientation'),
		value: section.orientation === 'mf' ? ['male', 'female'] : [section.orientation],
		options: [
			{
				label: i18n.t('love_profile_orientation_female'),
				value: 'female',
			},
			{
				label: i18n.t('love_profile_orientation_male'),
				value: 'male',
			},
		]
	},
	{
		id: 1,
		label: i18n.t('love_edit_title_search'),
		value: section.search,
		options: [
			{
				label: i18n.t('love_profile_search_love'),
				value: 'love',
			},
			{
				label: i18n.t('love_profile_search_life'),
				value: 'life',
			},
			{
				label: i18n.t('love_profile_search_night'),
				value: 'night',
			},
		]
	},
	{
		id: 2,
		label: i18n.t('love_edit_title_mood'),
		value: section.mood,
		options: [
			{
				label: i18n.t('love_profile_mood_netflix'),
				value: 'netflix',
			},
			{
				label: i18n.t('love_profile_mood_nightclub'),
				value: 'nightclub',
			},
			{
				label: i18n.t('love_profile_mood_friend'),
				value: 'friend',
			},
			{
				label: i18n.t('love_profile_mood_love'),
				value: 'love',
			},
		]
	},
	{
		id: 3,
		label: i18n.t('love_edit_title_holiday'),
		value: section.holiday,
		options: [
			{
				label: i18n.t('love_profile_holiday_mountain'),
				value: 'mountain',
			},
			{
				label: i18n.t('love_profile_holiday_beach'),
				value: 'beach',
			},
			{
				label: i18n.t('love_profile_holiday_forest'),
				value: 'forest',
			},
			{
				label: i18n.t('love_profile_holiday_house'),
				value: 'house',
			},
		]
	},
	{
		id: 4,
		label: i18n.t('love_edit_title_smoke'),
		value: section.smoke,
		options: [
			{
				label: i18n.t('love_profile_smoke_yes'),
				value: 'no',
			},
			{
				label: i18n.t('love_profile_smoke_no'),
				value: 'yes',
			},
		]
	},
	{
		id: 5,
		label: i18n.t('love_edit_title_movie'),
		value: section.movie,
		options: [
			{
				label: i18n.t('love_profile_movie_titanic'),
				value: 'titanic',
			},
			{
				label: i18n.t('love_profile_movie_lalaland'),
				value: 'lalaland',
			},
			{
				label: i18n.t('love_profile_movie_faf'),
				value: 'faf',
			},
			{
				label: i18n.t('love_profile_movie_avengers'),
				value: 'avengers',
			},
			{
				label: i18n.t('love_profile_movie_raiponse'),
				value: 'raiponce',
			},
			{
				label: i18n.t('love_profile_movie_shades'),
				value: 'shades',
			},
		]
	},
]