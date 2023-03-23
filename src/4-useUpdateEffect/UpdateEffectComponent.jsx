import React, { useState } from 'react';
import useUpdateEffect from "./useUpdateEffect";

const UpdateEffectComponent = () => {
	const [count, setCount] = useState(100)
	useUpdateEffect(() => alert(count), [count])

	return (
		<div style={{marginTop: '20px'}}>
			<div>{count}</div>
			<button onClick={() => setCount(prev => prev + 1)}>Increment Count and see Alert</button>
		</div>
	);
};

export default UpdateEffectComponent;