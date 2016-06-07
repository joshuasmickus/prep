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
			<button className={ this._getClassNames() } id={ id } onClick= { onClick }>
				{ children }
			</button>
		);
	}

	_getClassNames() {
		return 'button ' + className;
	}
}

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element
	]),
	className: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;