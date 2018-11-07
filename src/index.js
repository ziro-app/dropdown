import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { container, input, inputFocus } from './styles'

export default class Dropdown extends Component {
	state = { isFilled: false }
	handleChange = ({ target: { value }}) => {
		this.props.updateParent(this.props.name, value)
		if (value === '')
			this.setState({ isFilled: false })
		else
			this.setState({ isFilled: true })
	}
	render = () =>
		<div style={container}>
			<input
				style={this.state.isFilled ? inputFocus : input}
				list={`dropdown-options-${this.props.name}`}
				placeholder={this.props.placeholder}
				onChange={this.handleChange}
			/>
			<datalist id={`dropdown-options-${this.props.name}`}>
				{
					this.props.options.map( (option, index) =>
						<option key={index} value={option} />
					)
				}
			</datalist>
		</div>
}

Dropdown.propTypes = {
	name: PropTypes.string.isRequired, // must be the state name inside React parent component
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	updateParent: PropTypes.func.isRequired
}