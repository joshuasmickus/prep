import React, { Component, PropTypes } from 'react';

var noop = () => {};

class Button extends Component {
	getDefaultProps() {
		return {
			onClick: noop
		}
	}

	render() {
		var { children, className, id, onClick } = this.props;

		return (
			<button className=`button ${ className }` id={ id } onClick= { onClick }>
				{ children }
			</button>
		);
	}
}

Button.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;