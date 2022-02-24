import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Link from '../../components/Link'
import { connect } from 'react-redux'
import { LOGIN_ERROR, POST_LOGIN } from '../../redux/actions/user'


const LoginScreen = ({ navigation, onSubmit, isPending, theme, error, resetError }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)

	const handleSubmit = () => {
		if (!isPending) {
			onSubmit({
				email: email,
				password: password,
			})
		}
	}

	useEffect(() => {
		resetError()
	}, [resetError])

	if (error) {
		setTimeout(() => {
			resetError()
		}, 5000)
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
						keyboardType="email-address"
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
						title="Connexion" 
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
						title="Inscription" 
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
	onSubmit: PropTypes.func.isRequired,
	isPending: PropTypes.bool.isRequired,
	theme: PropTypes.object,
	error: PropTypes.string,
	resetError: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
	isPending: state.userReducer.loading,
	error: state.userReducer.error,
	theme: state.themeReducer.theme,
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (input) => dispatch({ type: POST_LOGIN, payload: input }),
	resetError: () => dispatch({ type: LOGIN_ERROR, payload: '' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

