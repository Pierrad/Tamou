import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Picker } from '@react-native-picker/picker'

import * as SC from './styled'

const SettingsScreen = ({ theme, headerData, translations, onLanguageChange, selectedLanguage, onDeleteAccount, isModalVisible, onChangeModalVisibility, onLogout, onThemeChange, selectedTheme }) => {

	const renderModal = useMemo(() => {
		return (
			<SC.Modal
				transparent={true}
				animationType="slide"
				visible={isModalVisible}
				onRequestClose={() => onChangeModalVisibility(!isModalVisible)}
			>
				<SC.Touchable onPress={() => onChangeModalVisibility(!isModalVisible)}>
					<SC.BasicView>
						<SC.Touchable onPress={() => {}}>
							<SC.ModalView style={SC.styles.modalView}>
								<SC.ModalTitle>{translations.deleteConfirmation}</SC.ModalTitle>
								<SC.ModalButton
									title={translations.deleteCTA}
									onPress={onDeleteAccount}
									underlayColor={theme.refuse}
									textColor={theme.pureWhite}
									style={SC.styles.button}
								/>
							</SC.ModalView>
						</SC.Touchable>
					</SC.BasicView>
				</SC.Touchable>
			</SC.Modal>
		)
	}, [isModalVisible, onChangeModalVisibility, onDeleteAccount, theme.pureWhite, theme.refuse, translations.deleteCTA, translations.deleteConfirmation])

	return (
		<SC.Container>
			<SC.Wrapper>
				<SC.Content>
					<SC.Header {...headerData} />
				</SC.Content>
				<SC.Content>
					<SC.Text>{translations.language}</SC.Text>
					<Picker
						selectedValue={selectedLanguage}
						onValueChange={(itemValue) =>
							onLanguageChange(itemValue)
						}
						itemStyle={{ color: theme.backgroundInverted }}
					>
						<Picker.Item
							label={translations.french}
							value="fr"
						/>
						<Picker.Item 
							label={translations.english}
							value="en"
						/>
					</Picker>
					<SC.Text>{translations.theme}</SC.Text>
					<Picker
						selectedValue={selectedTheme}
						onValueChange={(itemValue) =>
							onThemeChange(itemValue)
						}
						itemStyle={{ color: theme.backgroundInverted }}
					>
						<Picker.Item
							label={translations.light}
							value="light"
						/>
						<Picker.Item
							label={translations.dark}
							value="dark"
						/>
					</Picker>
				</SC.Content>
			</SC.Wrapper>
			<SC.LogoutButton
				title={translations.logout}
				onPress={onLogout}
				underlayColor={theme.orange}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
			<SC.Button
				title={translations.deleteCTA}
				onPress={() => onChangeModalVisibility(true)}
				underlayColor={theme.refuse}
				textColor={theme.pureWhite}
				style={SC.styles.button}
			/>
			{renderModal}
		</SC.Container>
	)
}

SettingsScreen.propTypes = {
	theme: PropTypes.object,
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	translations: PropTypes.object,
	selectedLanguage: PropTypes.string,
	onLanguageChange: PropTypes.func,
	onThemeChange: PropTypes.func,
	selectedTheme: PropTypes.string,
	onDeleteAccount: PropTypes.func,
	isModalVisible: PropTypes.bool,
	onChangeModalVisibility: PropTypes.func,
	onLogout: PropTypes.func,
}

export default SettingsScreen