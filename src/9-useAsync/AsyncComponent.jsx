import React from 'react';
import useAsync from "./useAsync";

const AsyncComponent = () => {
	const { loading, error, value } = useAsync(() => {
		return new Promise((resolve, reject) => {
			const success = true
			setTimeout(() => {
				success ? resolve('Hi') : reject('Error')
			}, 1000)
		})
	})
	return (
		<div style={{marginTop: '20px'}}>
			<div>Loading: {loading.toString()}</div>
			<div>{error}</div>
			<div>{value}</div>
		</div>
	);
};

export default AsyncComponent;