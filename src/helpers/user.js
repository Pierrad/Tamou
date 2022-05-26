export const hasSubscribeToCategories = (user) => {
	if (user.loveSection || user.gameSection || user.sportSection || user.cookingSection || user.studySection || user.petSection) {
		return true
	}
	return false
}