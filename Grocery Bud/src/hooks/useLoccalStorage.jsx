export const useLocalStorage = (key) => {
	const setItem = (val) => {
		try {
			window.localStorage.setItem(key, JSON.stringify(val));
		} catch (error) {
			console.log(error);
		}
	};

	const getItem = () => {
		try {
			let data = JSON.parse(window.localStorage.getItem(key));
			return data || [];
		} catch (error) {
			console.log(error);
		}
	};

	const deleteItem = (id) => {
		try {
			const arr = getItem();
			if (arr) {
				const updateArr = arr.filter((item) => item.id !== id);
				setItem(updateArr);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return { setItem, getItem, deleteItem };
};
