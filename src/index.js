import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Dropdown extends Component {
	state = {
		userInput: ''
	}
	handleChange = ({ target: { value }}) => {
		this.setState({ userInput: value })
		this.props.updateParent(this.props.name, value)
	}
	render = () => (
		<div>
			<input
				list='dropdown-options'
				placeholder={this.props.placeholder}
				onChange={this.handleChange}
			/>
			<datalist id='dropdown-options'>
				{
					this.props.options.map( (option, index) =>
						<option key={index} value={option} />
					)
				}
			</datalist>
		</div>
	)

}

Dropdown.propTypes = {
	name: PropTypes.string.isRequired, // must be the state name inside React parent component
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	updateParent: PropTypes.func.isRequired
}