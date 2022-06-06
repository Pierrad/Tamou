export const hasSubscribeToCategories = (user) => {
	if (user.loveSection.requested || user.gameSection.requested || user.sportSection.requested || user.cookSection.requested || user.studySection.requested || user.petSection.requested) {
		return true
	}
	return false
}
