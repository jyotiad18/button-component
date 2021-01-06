import React from 'react';
import cname from 'classnames';
import './Button.css';

function Button({
	variant,
	hover,
	disableShadow,
	disabled,
	size,
	color,
	startIcon,
	endIcon
}) {
	const startIconElement = startIcon ? <i className="material-icons">{startIcon}</i> : null
    const endIconElement = endIcon ? <i className="material-icons">{endIcon}</i> : null
	return (		
		<button className={
			cname({
				[`button__variant-${variant}`]: variant,
				[`button__size-${size}`]: size,
				[`button__color-${color}`]:color,
				hover: hover,
				disableShadow: disableShadow,
				disabled: disabled,
				startIcon: startIcon,
        		endIcon: endIcon
			})
		 }
		>
			{startIconElement}
			Default
			{endIconElement}
		</button> 		
	)
};

export default Button;