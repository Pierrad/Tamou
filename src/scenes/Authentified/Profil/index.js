import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ProfilScreen = ({ headerData, profilHeaderData, profilDetailData }) => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const handleEditPress = () => {
		setIsModalVisible(true)
	}

	const renderModal = useMemo(() => {
		return (
			<SC.Modal
				transparent={true}
				animationType="slide"
				visible={isModalVisible}
				onRequestClose={() => setIsModalVisible(!isModalVisible)}
			>
				<SC.Touchable onPress={() => setIsModalVisible(!isModalVisible)}>
					<SC.BasicView>
						<SC.Touchable onPress={() => {}}>
							<SC.ModalView style={SC.ModalStyle.modalView}>
								<SC.ModalPicker />
							</SC.ModalView>
						</SC.Touchable>
					</SC.BasicView>
				</SC.Touchable>
			</SC.Modal>
		)
	}, [isModalVisible])

	return (
		<SC.Container>
			<SC.Wrapper isModalVisible={isModalVisible}>
				<SC.Content>
					<SC.Header {...headerData} />
					<SC.ProfilTop {...profilHeaderData} onEditPress={handleEditPress} />
				</SC.Content>
				<SC.Divider />
				<SC.Content>
					<SC.ProfilD {...profilDetailData} />
				</SC.Content>
			</SC.Wrapper>
			{renderModal}
		</SC.Container>
	)
}

ProfilScreen.propTypes = {
	headerData: PropTypes.shape({
		onButtonPress: PropTypes.func,
		color: PropTypes.string,
		colorInverted: PropTypes.string,
		title: PropTypes.string,
		onDotPress: PropTypes.func,
	}),
	profilHeaderData: PropTypes.shape({
		avatar: PropTypes.string,
		name: PropTypes.string,
		location: PropTypes.string,
		onEditPress: PropTypes.func,
	}),
	profilDetailData: PropTypes.shape({
		title: PropTypes.string,
		fields: PropTypes.arrayOf(PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.string,
		})),
	}),
}


export default ProfilScreen


