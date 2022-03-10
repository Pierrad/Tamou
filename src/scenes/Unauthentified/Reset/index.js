import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import Input from '../../../components/Input'
import ActionButton from '../../../components/ActionButton'

const ResetScreen = (props) => {
	const { step, onSubmit, translations } = props
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setconfirmPassword] = useState('')
	const [code, setCode] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)

	const handleSubmit = () => {
		onSubmit({ email })
	}

	const renderEmailRequest = () => (
		<SC.Container>
			<SC.Head>
				<SC.NameApp>{translations.appName}</SC.NameApp>
				<SC.Caption>{translations.appSlogan}</SC.Caption>
			</SC.Head>		
			<SC.Contain1>
				<SC.Contain2>
					<SC.Title>{translations.title}</SC.Title>
					<SC.Subtitle>{translations.subtitle}</SC.Subtitle>
				</SC.Contain2>
				<SC.Contain3>
					<Input 
						placeholder={translations.emailFieldPlaceholder}
						value={email}
						onChange={setEmail}
						type="email-address"
					>
					</Input>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton  
						primary={true} 
						title={translations.submitButtonLabel}
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
				<SC.NameApp>{translations.appName}</SC.NameApp>
				<SC.Caption>{translations.appSlogan}</SC.Caption>
			</SC.Head2>		
			<SC.Contain1>
				<SC.Contain2>
					<SC.Title>{translations.title}</SC.Title>
				</SC.Contain2>
				<SC.Contain3>
					<Input 
						placeholder={translations.codeFieldPlaceholder}
						value={code}
						onChange={setCode}
					/>
					<Input
						placeholder={translations.passwordFieldPlaceholder}
						isPassword={true}
						value={password}
						onChange={setPassword}
						isPasswordViewable={canViewPassword}
						setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
					/>
					<Input
						placeholder={translations.confirmPasswordFieldPlaceholder}
						isPassword={true}
						value={confirmPassword}
						onChange={setconfirmPassword}
						isPasswordViewable={canViewPassword}
						setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
					/>
				</SC.Contain3>
				<SC.Contain4>
					<ActionButton  
						primary={true} 
						title={translations.submitNewPasswordButtonLabel}
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
	translations: PropTypes.objectOf(PropTypes.string),
}

export default ResetScreen