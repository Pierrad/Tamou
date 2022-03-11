export const translateMessage = (msg) => {
	switch (msg) {
	case 'Missing arguments':
		return 'Veuillez compléter tous les champs.'
	case 'Username must be at least 6 characters and must not exceed 30 characters':
		return 'Le nom d\'utilisateur doit contenir au moins 6 caractères et ne doit pas dépasser 30 caractères.'
	case 'Invalid arguments':
		return 'Les champs sont invalides.'
	case 'User already exists':
		return 'Cet utilisateur existe déjà.'
	case 'Username already exists':
		return 'Ce nom d\'utilisateur existe déjà.'
	case 'Invalid password. Must contain uppercase, lowercase, digits, symbols, length between 8 to 100, no spaces':
		return 'Le mot de passe est invalide. Il doit contenir au moins une majuscule, une minuscule, un chiffre, un symbole et doit contenir entre 6 et 30 caractères.'
	case 'Internal error': 
		return 'Une erreur interne est survenue.'
	case 'Invalid email or password':
		return 'Email ou mot de passe invalide.'
	default:
		return msg
	}
}