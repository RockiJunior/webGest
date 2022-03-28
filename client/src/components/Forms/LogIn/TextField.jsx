import React from 'react';
import { useField} from 'formik';

const TextField = ({ label, ...props }) => {
	// const [field, meta] = useField(); // tambien utiliza meta
	const [ field, ] = useField(props); // meta no va por los warnings 

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
