import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Link from '../../components/Link'



const RegisterScreen = ({navigation}) => (
	<SC.Container>
		<SC.NameApp>Tamou</SC.NameApp>
		<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
		<SC.Head></SC.Head>
		<SC.Contain1>
			<SC.Contain2>
				<SC.Title>Bienvenue</SC.Title>
				<SC.Subtitle>Inscrivez vous pour continuer</SC.Subtitle>
			</SC.Contain2>
			<SC.Contain3>
				<Input 
					placeholder= "Username"
					underlineColor="black">
				</Input>
				<Input 
					placeholder= "Password" isPassword={true}
					underlineColor="black">
				</Input>
				<Input 
					placeholder= "Email" 
					underlineColor="black">
				</Input>
				<Input 
					placeholder= "Nom" 
					underlineColor="black">
				</Input>
				<Input 
					placeholder= "Prenom" 
					underlineColor="black">
				</Input>
				<Input 
					placeholder= "Date de naissance" 
					underlineColor="black">
				</Input>
			</SC.Contain3>
			<SC.Contain4>
				<ActionButton  
					primary={true} 
					title="Inscription" 
					onPress={()=> navigation.navigate('Home')}
					underlayColor="orange"
				/>
			</SC.Contain4>
			<SC.Contain5>
				<SC.Text>Vous avez déjà un compte?</SC.Text>
				<Link 
					title = "Connexion" 
					onPress={()=> navigation.navigate('Home')}
					underlayColor="none"
				/>
			
			</SC.Contain5>
		</SC.Contain1>
	</SC.Container>
)

RegisterScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

export default RegisterScreen