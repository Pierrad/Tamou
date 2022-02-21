import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Link from '../../components/Link'



const LoginScreen = ({navigation}) => (
	<SC.Container>
		<SC.NameApp>Tamou</SC.NameApp>
		<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
		<SC.Head></SC.Head>
		<SC.Contain1>
			<SC.Title>Bon retour</SC.Title>
			<SC.Subtitle>Connectez vous pour continuer</SC.Subtitle>
			<SC.Contain2>
				<Input 
					placeholder= "UserName"
					underlineColor='red'>
				</Input>
				<Input 
					placeholder= "Password" isPassword={true}
					underlineColor="black">
				</Input>
			</SC.Contain2>
			<SC.Contain3>
				<ActionButton  
					primary={true} 
					title="Connexion" 
					onPress={()=> navigation.navigate('Home')}
					underlayColor="orange"
				/>
			</SC.Contain3>
			<SC.Contain4>
				<SC.Text>Mot de passe oublié?</SC.Text>
				<Link 
					title = "Reinitialiser le mot de passe" 
					onPress={()=> navigation.navigate('Home')}
					underlayColor="none"
				/>
			
			</SC.Contain4>
			<SC.Contain5>
				<ActionButton
					isOutlined={true}
					title="Inscription" 
					onPress={()=> navigation.navigate('Home')} 
					underlayColor="silver"
				/>
			</SC.Contain5>
		</SC.Contain1>
	</SC.Container>
)

LoginScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
}

export default LoginScreen