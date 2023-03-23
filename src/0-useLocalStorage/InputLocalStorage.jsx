import React from 'react';
import useLocalStorage from "./useLocalStorage";

const InputLocalStorage = () => {
	const [name, setName] = useLocalStorage('name', '')
	return (
		<input value={name} onChange={e => setName(e.target.value)} type='text'/>
	);
};

export default InputLocalStorage;