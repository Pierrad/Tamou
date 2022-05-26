import React from 'react'
import PropTypes from 'prop-types'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useTranslation } from 'react-i18next'

import * as SC from './styled'

const PictureInput = ({ onChange }) => {
	const { t } = useTranslation()

	const handleLibraryPress = () => {
		launchImageLibrary({
			mediaType: 'photo',
			quality: 1,
		}, (response) => {
			if (response && response.assets) {
				onChange({
					uri: response.assets[0].uri.replace('file://', ''),
					name: response.assets[0].fileName,
					mimetype: response.assets[0].type,
				})
			}
		})
	}

	const handleCameraPress = () => {
		launchCamera({
			mediaType: 'photo',
			quality: 1,
			includeBase64: true,
		}, (response) => {
			if (response && response.assets) {
				onChange({
					uri: response.assets[0].uri.replace('file://', ''),
					name: response.assets[0].fileName,
					mimetype: response.assets[0].type,
				})
			}
		})
	}

	return (
		<SC.Container>
			<SC.Touchable onPress={handleLibraryPress}>
				<SC.Icon name="photo-library" size={50} color="#000" />
				<SC.Text>{t('profil_screen_choose_from_galery')}</SC.Text>
			</SC.Touchable>
			<SC.Touchable onPress={handleCameraPress}>
				<SC.Icon name="photo-camera" size={50} color="#000" />
				<SC.Text>{t('profil_screen_take_a_picture')}</SC.Text>
			</SC.Touchable>
		</SC.Container>
	)
}

PictureInput.propTypes = {
	onChange: PropTypes.func,
}

export default PictureInput