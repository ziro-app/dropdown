import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { container, input, inputFocus } from './styles'

export default class Dropdown extends Component {
	state = { isFilled: false }
	handleChange = ({ target: { value }}) => this.props.updateParent(this.props.name, value)
	componentDidMount = () => {
		if (this.props.value)
			this.setState({ isFilled: true })
	}
	componentDidUpdate = ({ value: previousValue }) => {
		if (this.props.value !== previousValue )
			this.setState({ isFilled: !Boolean(this.props.value) })
	}
	render = () =>
		<div style={container}>
			<input
				style={this.state.isFilled ? inputFocus : input}
				list={`dropdown-options-${this.props.name}`}
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={this.handleChange}
			/>
			<datalist id={`dropdown-options-${this.props.name}`}>
				{this.props.options.map( (option, index) =>
					<option key={index} value={option} />
				)}
			</datalist>
		</div>
}

Dropdown.propTypes = {
	name: PropTypes.string.isRequired, // must be the state name given in parent component
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	value: PropTypes.string.isRequired,
	updateParent: PropTypes.func.isRequired
}