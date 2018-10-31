import React, { Component } from 'react';

export default class Dropdown extends Component {
	state = {
		userInput: ''
	}
	handleChange = ({ target: { value }}) => this.setState({ userInput: value })
	render = () => (
		<div>
			<input list='dropdown-options' onChange={this.handleChange} />
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