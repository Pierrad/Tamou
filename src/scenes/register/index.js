import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Link from '../../components/Link'
import { connect } from 'react-redux'
import { POST_REGISTER, REGISTER_ERROR } from '../../redux/actions/user'


const RegisterScreen = ({ navigation, onSubmit, isPending, theme, error, resetError }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)

	const handleSubmit = () => {
		if (!isPending) {
			onSubmit({
				username: userName,
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
				<SC.NameApp>TANDUR</SC.NameApp>
				<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
			</SC.Head>
			<SC.Contain1>
				<SC.Contain2>
					<SC.Title>Bienvenue</SC.Title>
					<SC.Subtitle>Inscrivez vous pour continuer</SC.Subtitle>
				</SC.Contain2>
				<SC.Contain3>
					<Input
						placeholder="Nom d'utilisateur"
						value={userName}
						onChange={setUserName}
					/>
					<Input
						placeholder="Mot de passe"
						isPassword={true}
						value={password}
						onChange={setPassword}
						isPasswordViewable={canViewPassword}
						setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
					/>
					<Input
						placeholder="Email"
						value={email}
						onChange={setEmail}
						keyboardType="email-address"
					/>
					<Input
						placeholder="Nom"
						value={lastName}
						onChange={setLastName}
					/>
					<Input
						placeholder="Prénom"
						value={firstName}
						onChange={setFirstName}
					/>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton
						primary={true}
						title={!isPending ? 'Inscription' : ''}
						onPress={handleSubmit}
						underlayColor="orange"
					>
						{isPending && <SC.Spinner color={theme.pureWhite} />}
					</ActionButton>
				</SC.Contain4>
				<SC.Contain5>
					<SC.Text>Vous avez déjà un compte?</SC.Text>
					<Link
						title="Connexion"
						onPress={() => navigation.navigate('Login')}
						underlayColor="none"
					/>
				</SC.Contain5>
			</SC.Contain1>
		</SC.Container>
	)
}

RegisterScreen.propTypes = {
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
	onSubmit: (input) => dispatch({ type: POST_REGISTER, payload: input }),
	resetError: () => dispatch({ type: REGISTER_ERROR, payload: '' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

