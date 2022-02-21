import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'



const ResetScreen = ({navigation}) => (
	<SC.Container>
		<SC.NameApp>Tamou</SC.NameApp>
		<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
		<SC.Head></SC.Head>
		<SC.Contain1>
			<SC.Contain2>
				<SC.Title>Réinitialiser votre mot de passe</SC.Title>
			</SC.Contain2>
			<SC.Contain3>
				<Input 
					placeholder= "Email"
					underlineColor="black">
				</Input>
				<Input 
					placeholder= "Nouveau mot de passe" isPassword={true}
					underlineColor="black">
				</Input>
				<Input 
					placeholder= "Confirmer mot de passe" isPassword={true}
					underlineColor="black">
				</Input>
			</SC.Contain3>
			<SC.Contain4>
				<ActionButton  
					primary={true} 
					title="Connexion" 
					onPress={()=> navigation.navigate('Home')}
					underlayColor="orange"
				/>
			</SC.Contain4>
		</SC.Contain1>
	</SC.Container>
)

ResetScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

export default ResetScreen