import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'
import Link from '../../components/Link'
import { connect } from 'react-redux'
import { POST_REGISTER } from '../../redux/actions/user'


const RegisterScreen = ({navigation, onSubmit}) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = () => {
		onSubmit({
			username: userName,
			email: email,
			password: password,
		})
	}
  

	return (
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
						placeholder="Nom d'utilisateur"
						underlineColor="black"
						value={userName}
						onChange={setUserName}
					/>
					<Input
						placeholder="Mot de passe"
						isPassword={true}
						underlineColor="black"
						value={password}
						onChange={setPassword}
					/>
					<Input
						placeholder="Email"
						underlineColor="black"
						value={email}
						onChange={setEmail}
					/>
					<Input
						placeholder="Nom"
						underlineColor="black"
						value={lastName}
						onChange={setLastName}
					/>
					<Input
						placeholder="Prénom"
						underlineColor="black"
						value={firstName}
						onChange={setFirstName}
					/>
					<Input
						placeholder="Date de naissance"
						underlineColor="black"
					/>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton
						primary={true}
						title="Inscription"
						onPress={handleSubmit}
						underlayColor="orange"
					/>
				</SC.Contain4>
				<SC.Contain5>
					<SC.Text>Vous avez déjà un compte?</SC.Text>
					<Link
						title="Connexion"
						onPress={() => navigation.navigate('Home')}
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
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (input) => dispatch({ type: POST_REGISTER, payload: input }),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

