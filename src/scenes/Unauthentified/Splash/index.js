/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useState} from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'
import ActionButton from '../../../components/ActionButton'


const SplashScreenWrapper = (props) => {
	const { navigation} = props

	const [scroll, setScroll] = useState(0)

	const handleClick = function() {
		setScroll(s => s + 1)
		
	}
	console.log(scroll)
	
	let scrollArrow
	
	if(scroll == 0) {
		scrollArrow = 
		(
	       <SC.Contain2>
				<SC.View>
					<SC.Text> bonjour </SC.Text>
				</SC.View>
				<SC.ArrowContain>
					<SC.Arrow
						onPress={handleClick}
						name="arrowright"
						size={45} />
				</SC.ArrowContain>
			</SC.Contain2>
		) 
			
		
		
		
	} else if(scroll == 1) {
		scrollArrow = (
			<SC.Contain2>
				<SC.View> 
					<SC.Text> PA </SC.Text> 
				</SC.View>
				<SC.ArrowContain>
					<SC.Arrow
						onPress = {handleClick}
						name= "arrowright"
						size={45} 
					/>
				</SC.ArrowContain>
			
			</SC.Contain2>
		) 
			
	} else if(scroll == 2) {
		scrollArrow = (
			<SC.Contain2>
				<SC.View> 
					<SC.Text> Je  </SC.Text> 
				</SC.View>
				<SC.ArrowContain>
					<SC.Arrow
						onPress = {handleClick}
						name= "arrowright"
						size={45} 
					/>
				</SC.ArrowContain>
			
			</SC.Contain2>
		) 
			
	} 
	
	else {
		scrollArrow = ( 
			<SC.Contain3>
				<SC.View>
					<SC.Text> Taime  ❤️ </SC.Text> 
				</SC.View>
				<SC.ContainButton>
					<ActionButton
						primary={false} 
						title="Commencer" 
						onPress={() => navigation.navigate('Register')}
					
					/>
				</SC.ContainButton>
			</SC.Contain3>
		)
	}
	

	return (
		<SC.Container>
			<SC.Contain1>
				<SC.NameApp>Tamou</SC.NameApp>
				<SC.Caption>Rencontrer la bonne personne!</SC.Caption>
				<SC.DotWrapper>
					<SC.Dot isSelected={scroll == 0}/>
					<SC.Dot isSelected={scroll == 1}/>
					<SC.Dot isSelected={scroll == 2}/>
					<SC.Dot isSelected={scroll == 3}/>
				</SC.DotWrapper>
			</SC.Contain1>
			{scrollArrow}
		</SC.Container>
	)
}

SplashScreenWrapper.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
	}).isRequired,
	isSelected: PropTypes.bool,
}

export default SplashScreenWrapper