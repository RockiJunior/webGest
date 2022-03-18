import React from 'react';
import { useField} from 'formik';

const TextField = ({ label, ...props }) => {
	const [ field,  ] = useField(props);
	return (
		<div className="mb-2">
			<label htmlFor={field.name}>{label}</label>
			<input 
            autoComplete="nope"
            className="form-control shadow bg-secondary rounded"
            {...field}{...props}
            />
		</div>
	);
};

export default TextField;
