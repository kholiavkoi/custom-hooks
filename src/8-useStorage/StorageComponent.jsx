import React from 'react';
import { useLocalStorage, useSessionStorage } from "./useStorage";

const StorageComponent = () => {
	const [name, setName, removeName] = useSessionStorage('name', 'Mike')
	const [age, setAge, removeAge] = useLocalStorage('age', 26)
	return (
		<div style={{marginTop: '20px'}}>
			<div>{name} - {age}</div>
			<button onClick={() => setName('John')}>Set Name</button>
			<button onClick={() => setAge(40)}>Set Age</button>
			<button onClick={removeName}>Remove Name</button>
			<button onClick={removeAge}>Remove Age</button>
		</div>
	);
};

export default StorageComponent;