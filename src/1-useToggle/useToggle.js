import { useState } from "react";

const useToggle = (defaultValue) => {
	const [value, setValue] = useState(defaultValue)

	function toggleValue(value) {
		setValue((currentValue) => {
			return typeof value === 'boolean' ? value : !currentValue
		})
	}

	return [value, toggleValue]
};

export default useToggle;