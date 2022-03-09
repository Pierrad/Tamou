import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'



const ResetScreen = ({navigation}) => {
	const [email, setEmail] = useState('')

	return (
		<SC.Container>
			<SC.Head>
				<SC.NameApp>Tamou</SC.NameApp>
				<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
			</SC.Head>		
			<SC.Contain1>
				<SC.Contain2>
					<SC.Title>Réinitialiser votre mot de passe</SC.Title>
					<SC.Subtitle>Nous allons envoyer un code de réiniatialisation à l’adresse mail suivante</SC.Subtitle>
				</SC.Contain2>
				<SC.Contain3>
					<Input 
						placeholder="Email"
						value={email}
						onChange={setEmail}
						type="email-address"
					>
					</Input>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton  
						primary={true} 
						title="ENVOYER LE CODE" 
						onPress={()=> navigation.navigate('Home')}
						underlayColor="orange"
					/>
				</SC.Contain4>
			</SC.Contain1>
		</SC.Container>
	)
}

ResetScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

export default ResetScreen