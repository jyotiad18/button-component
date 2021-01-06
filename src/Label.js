import React from 'react';
import './css/Label.css';

function Label({ text, classType }) {
	const classname = classType ? "label label__" + classType : "label";
	
	return (
		<div className={classname}>
			{text}
		</div>
	)
}

export default Label;
