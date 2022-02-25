import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const ProfilScreen = ({ headerData, profilHeaderData, profilDetailData }) => {

	return (
		<SC.Container>
			<SC.Content>
				<SC.Header
					{...headerData}
				/>
				<SC.ProfilTop 
					{...profilHeaderData}
				/>
			</SC.Content>
			<SC.Divider />
			<SC.Content>
				<SC.ProfilD
					{...profilDetailData}
				/>
			</SC.Content>
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
			isEditable: PropTypes.bool,
		})),
	}),
}


export default ProfilScreen


