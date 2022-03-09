import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../components/Input'
import ActionButton from '../../components/ActionButton'

const ResetScreen = (props) => {
	const { step, onSubmit } = props
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [code, setCode] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)

	const handleSubmit = () => {
		onSubmit({ email })
	}

	const renderEmailRequest = () => (
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
						onPress={handleSubmit}
						underlayColor="orange"
					/>
				</SC.Contain4>
			</SC.Contain1>
		</SC.Container>
	)

	const renderCodeRequest = () => (
		<SC.Container>
			<SC.Head2>
				<SC.NameApp>Tamou</SC.NameApp>
				<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
			</SC.Head2>		
			<SC.Contain1>
				<SC.Contain2>
					<SC.Title>Réinitialiser votre mot de passe</SC.Title>
				</SC.Contain2>
				<SC.Contain3>
					<Input 
						placeholder="Code"
						value={code}
						onChange={setCode}
					/>
					<Input
						placeholder="Nouveau mot de passe"
						isPassword={true}
						value={password}
						onChange={setPassword}
						isPasswordViewable={canViewPassword}
						setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
					/>
					<Input
						placeholder="Répéter le mot de passe"
						isPassword={true}
						value={repeatPassword}
						onChange={setRepeatPassword}
						isPasswordViewable={canViewPassword}
						setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
					/>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton  
						primary={true} 
						title="REINITIALISER" 
						onPress={handleSubmit}
						underlayColor="orange"
					/>
				</SC.Contain4>
			</SC.Contain1>
		</SC.Container>
	)

	return (
		step === 1 ? renderEmailRequest() : renderCodeRequest()
	)
}

ResetScreen.propTypes = {
	step: PropTypes.number.isRequired,
	onSubmit: PropTypes.func.isRequired,
}

export default ResetScreen