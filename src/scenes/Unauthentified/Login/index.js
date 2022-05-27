import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../components/Input'
import ActionButton from '../../../components/ActionButton'
import Link from '../../../components/Link'
import DismissKeyboardHOC from '../../../helpers/useDismissKeyboardView'

import * as SC from './styled'



const LoginScreen = (props) => {
	const { navigation, isPending, theme, onSubmit, translations } = props
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)

	const handleSubmit = () => {
		onSubmit({ email, password })
	}

	return (
		<SC.Container>
			<SC.Head>
				<SC.NameApp>{translations.appName}</SC.NameApp>
				<SC.Caption>{translations.appSlogan}</SC.Caption>
			</SC.Head>
			<SC.Contain1 style={SC.style.container}>
				<DismissKeyboardHOC flex={5}>
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
						<Input 
							placeholder={translations.passwordFieldPlaceholder}
							value={password}
							onChange={setPassword}
							isPassword={true}
							isPasswordViewable={canViewPassword}
							setIsPasswordViewable={() => setCanViewPassword(!canViewPassword)}
						>
						</Input>
					</SC.Contain3>
				</DismissKeyboardHOC>
				<SC.Contain4>
					<ActionButton  
						primary={true} 
						title={translations.submitButtonLabel}
						onPress={handleSubmit}
						underlayColor="orange"
					>	
						{isPending && <SC.Spinner color={theme.pureWhite} />}
					</ActionButton>
				</SC.Contain4>
				<SC.Contain5>
					<SC.Text>{translations.forgotPasswordButtonLabel}</SC.Text>
					<Link 
						title={translations.forgotPasswordButtonAction}
						onPress={()=> navigation.navigate('Reset')}
						underlayColor="none"
					/>
				</SC.Contain5>
				<SC.Contain6 style={SC.style.contain}>
					<ActionButton
						isOutlined={true}
						title={translations.registerButtonLabel} 
						onPress={()=> navigation.navigate('Register')} 
						underlayColor="white"
					/>
				</SC.Contain6>
				<SC.Hide />
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
	onSubmit: PropTypes.func.isRequired,
	translations: PropTypes.objectOf(PropTypes.string),
}

export default LoginScreen
