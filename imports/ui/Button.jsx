import React, { Component, PropTypes } from 'react';

var noop = () => {};

class Button extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var { children, className, id, onClick } = this.props;

		return (
			<button className={ this._getClassNames(className) } id={ id } onClick= { onClick }>
				{ children }
			</button>
		);
	}

	_getClassNames(className) {
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

Button.defaultProps = {
	children: null,
	className: null,
	id: null,
	onClick: noop
};

export default Button;