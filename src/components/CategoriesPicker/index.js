import React from 'react'
import PropTypes from 'prop-types'

import * as SC from './styled'

const CategoriesPicker = (props) => {
	const { style, theme, onArrowPress, onCategoryPress, values } = props
	return (
		<SC.Container style={style ? style[0] : {}}>
			<SC.Title>Je suis là pour...</SC.Title>
			<SC.Buttons>
				<SC.ToggleButtonWrap
					isOdd
				>
					<SC.ToggleButton 
						text="Des rencontres"
						backgroundSelectedColor={theme.love}
						onPress={() => onCategoryPress('love')}
						isSelected={values.includes('love')}
					/>
				</SC.ToggleButtonWrap>
				<SC.ToggleButtonWrap>
					<SC.ToggleButton 
						text="Les jeux vidéos"
						backgroundSelectedColor={theme.game}
						onPress={() => onCategoryPress('game')}
						isSelected={values.includes('game')}
					/>
				</SC.ToggleButtonWrap>
				<SC.ToggleButtonWrap
					isOdd
				>
					<SC.ToggleButton
						text="Le sport"
						onPress={() => onCategoryPress('sport')}
						backgroundSelectedColor={theme.sport}
						isSelected={values.includes('sport')}
					/>
				</SC.ToggleButtonWrap>
				<SC.ToggleButtonWrap>
					<SC.ToggleButton 
						text="La cuisine"
						onPress={() => onCategoryPress('cook')}
						backgroundSelectedColor={theme.cook}
						isSelected={values.includes('cook')}
					/>
				</SC.ToggleButtonWrap>
				<SC.ToggleButtonWrap
					isOdd
				>
					<SC.ToggleButton 
						text="Les études"
						onPress={() => onCategoryPress('study')}
						backgroundSelectedColor={theme.study}
						isSelected={values.includes('study')}
					/>
				</SC.ToggleButtonWrap>
				<SC.ToggleButtonWrap>
					<SC.ToggleButton 
						text="Les animaux"
						onPress={() => onCategoryPress('pet')}
						backgroundSelectedColor={theme.pet}
						isSelected={values.includes('pet')}
					/>
				</SC.ToggleButtonWrap>
			</SC.Buttons>
			<SC.Button
				onPress={onArrowPress}
				underlayColor='#fff'
			>
				<SC.Icon name="arrowright" size={30} color="#000" />
			</SC.Button> 
		</SC.Container>
	)
}

CategoriesPicker.propTypes = {
	style: PropTypes.array,
	theme: PropTypes.object,
	onArrowPress: PropTypes.func,
	onCategoryPress: PropTypes.func,
	values: PropTypes.array,
}

export default CategoriesPicker