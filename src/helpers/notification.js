import i18n from '../i18n/i18n'

export const getDurationHintFromDelay = (delay) => {
	if (delay <= 10) {
		return i18n.t('notification_duration_short')
	} else if (delay <= 1440) {
		return i18n.t('notification_duration_medium')
	}
	return i18n.t('notification_duration_long')
}