const colors = {
	pureWhite: '#ffffff',
	pureBlack: '#000000',
	honeydew: '#C7C7C7',
	orange: '#F99030',
	love: '#F67272',
	game: '#8A9DFF',
	sport: '#EE89FF',
	cook: '#7AF9A5',
	study: '#FFB489',
	pet: '#FF89B4',
	error: '#F3564D',
	lightGrey: '#898989',
	lightOrange: '#F2EAE0',
	veryLightGrey: '#E7E7E7',
	red: '#FF0000',
	refuse: '#FF2D2D',
	green: '#7CFC00',
}

export const darkTheme = {
	mode: 'dark',
	backgroundColor: '#353c51',
	primaryTextColor: '#F99030',
	secondaryTextColor: '#ffffff',
	primaryButtonColor: '#F99030',
	secondaryButtonColor: '#FFFFFF',
	background: '#000000',
	backgroundInverted: '#ffffff',
	...colors,
}

export const lightTheme = {
	mode: 'light',
	backgroundColor: '#ffffff',
	primaryTextColor: '#F99030',
	secondaryTextColor: '#333333',
	primaryButtonColor: '#F99030',
	secondaryButtonColor: '#FFFFFF',
	background: '#ffffff',
	backgroundInverted: '#000000',
	...colors,
}