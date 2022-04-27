import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../../../components/Input'
import ActionButton from '../../../components/ActionButton'
import Link from '../../../components/Link'
import DismissKeyboardHOC from '../../../helpers/useDismissKeyboardView'
import { isBirthdayIsValid } from '../../../helpers/dateHelpers'

import * as SC from './styled'

const RegisterScreen = (props) => {
	const { navigation, onSubmit, isPending, translations } = props

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [canViewPassword, setCanViewPassword] = useState(false)
	const [birthday, setBirthday] = useState('')

	const handleSubmit = () => {
		const splitBirthday = birthday.split('/')
		const date = new Date(parseInt(splitBirthday[2]), parseInt(splitBirthday[1])-1, parseInt(splitBirthday[0])+1)
		if(birthday.length==10 && isBirthdayIsValid(date)){
			console.log(date)
			onSubmit({
				username: userName,
				email: email,
				password: password,
				firstname: firstName,
				lastname: lastName,
				birthday: birthday,
			})
		}
	}
	
	const handleBirthday = (value) => {
		if(birthday.length > value.length){
			setBirthday(value)
		}else{
			if(birthday.length == 1){
				setBirthday(value + '/')
			}else if (birthday.length == 4){
				setBirthday(value + '/')
			}else if(birthday.length <=9){
				setBirthday(value)
			}
		}
	}


	return (
		<SC.Container>
			<SC.Head>
				<SC.NameApp>{translations.appName}</SC.NameApp>
				<SC.Caption>{translations.appSlogan}</SC.Caption>
			</SC.Head>
			<SC.Contain1 style={SC.style.container}>
				<DismissKeyboardHOC flex={8}>
					<SC.Contain2>
						<SC.Title>{translations.title}</SC.Title>
						<SC.Subtitle>{translations.subtitle}</SC.Subtitle>
					</SC.Contain2>
					<SC.Contain3>
						<Input
							placeholder={translations.pseudoFieldPlaceholder}
							value={userName}
							onChange={setUserName}
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
							placeholder={translations.emailFieldPlaceholder}
							value={email}
							onChange={setEmail}
							type="email-address"
						/>
						<Input
							placeholder={translations.lastnameFieldPlaceholder}
							value={lastName}
							onChange={setLastName}
						/>
						<Input
							placeholder={translations.firstnameFieldPlaceholder}
							value={firstName}
							onChange={setFirstName}
						/>
						<Input
						    placeholder={translations.birthdayFieldPlaceholder}
						    value={birthday}
							onChange={handleBirthday}
						/>
					</SC.Contain3>
				</DismissKeyboardHOC>
					
				<SC.Contain4>
					<ActionButton
						primary={true}
						title={translations.submitButtonLabel}
						onPress={handleSubmit}
						underlayColor="orange"
						isPending={isPending}
					/>
				</SC.Contain4>
				<SC.Contain5 style={SC.style.contain}>
					<SC.Text>{translations.alreadyHaveAccountButtonLabel}</SC.Text>
					<Link
						title={translations.alreadyHaveAccountButtonAction}
						onPress={() => navigation.navigate('Login')}
						underlayColor="none"
					/>
				</SC.Contain5>
				<SC.Hide />
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
	translations: PropTypes.objectOf(PropTypes.string),
}

export default RegisterScreen