import {useEffect, useState} from 'react';

/**
 * A custom hook that allows you to store and retrieve data in the local storage.
 * @param {string} keyName - The key under which the data will be stored in the local storage.
 * @param {any} defaultValue - The initial value for the data. Defaults to null if not provided.
 * @returns {{
 *   value: any|null,
 *   setValue: (value: any) => void,
 *   removeValue: () => void
 * }} - An object containing the stored value and a function to update it
 */
const useLocalStorageByState = (keyName, defaultValue) => {
	const [value, setValue] = useState(() => {
		try {
			const value = window.localStorage.getItem(keyName);

			if (value) {
				return JSON.parse(value);
			} else {
				window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
				return defaultValue;
			}
		} catch (err) {
			return defaultValue;
		}
	});

	useEffect(() => {
		try {
			window.localStorage.setItem(keyName, JSON.stringify(value));
		} catch (e) {
			console.error(e);
		}
	}, [value, keyName]);

	const removeValue = () => {
		try {
			window.localStorage.removeItem(keyName);
		} catch (e) {
			console.error(e);
		}
	};

	return {
		value: value,
		setValue: setValue,
		removeValue: removeValue,
	};
};

export default useLocalStorageByState;
