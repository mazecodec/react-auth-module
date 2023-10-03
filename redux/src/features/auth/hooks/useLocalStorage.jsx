import { useEffect } from "react";

/**
 * A custom hook that allows you to store and retrieve data in the local storage.
 *
 * @param {string} keyName  - The key under which the data will be stored in the local storage
 * @param {any} initialValue - The initial value for the data. Defaults to null if not provided.
 * @returns {{
 * 		getValue: (any|null|undefined),
 * 		setValue: (value: any) => void,
 * 		removeValue: () => void,
 * }} - An object containing the stored value and a function to update it
 */
const useLocalStorage = (keyName, initialValue) => {
	const setInitialValue = (key, initialValue) => {
		try {
			const currentValue = window.localStorage.getItem(keyName);

			if (currentValue) {
				return JSON.parse(currentValue);
			}

			if (initialValue) {
				window.localStorage.setItem(keyName, JSON.stringify(initialValue));
				return initialValue;
			}
		} catch (err) {
			return initialValue;
		}
	};

	const get = () => {
		try {
			const item = window.localStorage.getItem(keyName);

			if (item) {
				return JSON.parse(item);
			}
		} catch (e) {
			console.error(e);
		}
	};

	const set = (value) => {
		try {
			window.localStorage.setItem(keyName, JSON.stringify(value));
		} catch (e) {
			console.error(e);
		}
	};

	const remove = () => {
		try {
			window.localStorage.removeItem(keyName);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		const value = setInitialValue(keyName, initialValue);
		if (value) {
			set(value);
		}
	}, [keyName]);

	return {
		getValue: get,
		setValue: set,
		removeValue: remove,
	};
};

export default useLocalStorage;
