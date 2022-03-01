import React from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'


import * as SC from './styled'

const PictureInput = () => {

	const handleLibraryPress = () => {
		launchImageLibrary({
			mediaType: 'photo',
			quality: 1,
		}, (response) => {
			console.log('response', response)
		})
	}

	const handleCameraPress = () => {
		launchCamera({
			mediaType: 'photo',
			quality: 1,
		}, (response) => {
			console.log('response', response)
		})
	}

	return (
		<SC.Container>
			<SC.Touchable onPress={handleLibraryPress}>
				<SC.Icon name="photo-library" size={50} color="#000" />
				<SC.Text>Choisir depuis la galerie</SC.Text>
			</SC.Touchable>
			<SC.Touchable onPress={handleCameraPress}>
				<SC.Icon name="photo-camera" size={50} color="#000" />
				<SC.Text>Prendre une photo</SC.Text>
			</SC.Touchable>
		</SC.Container>
	)
}

PictureInput.propTypes = {}

export default PictureInput