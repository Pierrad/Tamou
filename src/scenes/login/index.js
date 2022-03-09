import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Link from '../../components/Link'


const LoginScreen = (props) => {
	const { navigation, isPending, theme, error, onSubmit } = props
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)

	const handleSubmit = () => {
		onSubmit({ email, password })
	}

	return (
		<SC.Container>
			{error.length > 0 && (
				<SC.ErrorContainer>
					<SC.Error>{error}</SC.Error>
				</SC.ErrorContainer>
			)}
			<SC.Head>
				<SC.NameApp>Tamou</SC.NameApp>
				<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
			</SC.Head>
			<SC.Contain1>
				<SC.Contain2>
					<SC.Title>Bon retour</SC.Title>
					<SC.Subtitle>Connectez vous pour continuer</SC.Subtitle>
				</SC.Contain2>
				<SC.Contain3>
					<Input 
						placeholder="Email"
						value={email}
						onChange={setEmail}
						type="email-address"
					>
					</Input>
					<Input 
						placeholder="Mot de passe"
						value={password}
						onChange={setPassword}
						isPassword={true}
						isPasswordViewable={canViewPassword}
						setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
					>
					</Input>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton  
						primary={true} 
						title="CONNEXION" 
						onPress={handleSubmit}
						underlayColor="orange"
					>	
						{isPending && <SC.Spinner color={theme.pureWhite} />}
					</ActionButton>
				</SC.Contain4>
				<SC.Contain5>
					<SC.Text>Mot de passe oublié?</SC.Text>
					<Link 
						title="Reinitialiser le mot de passe" 
						onPress={()=> navigation.navigate('Reset')}
						underlayColor="none"
					/>
				</SC.Contain5>
				<SC.Contain6>
					<ActionButton
						isOutlined={true}
						title="INSCRIPTION" 
						onPress={()=> navigation.navigate('Register')} 
						underlayColor="silver"
					/>
				</SC.Contain6>
			
			</SC.Contain1>
		</SC.Container>
	)
}

LoginScreen.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	isPending: PropTypes.bool.isRequired,
	theme: PropTypes.object,
	error: PropTypes.string,
	onSubmit: PropTypes.func.isRequired,
}

export default LoginScreen
