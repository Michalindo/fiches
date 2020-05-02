import React, { createContext, useReducer } from 'react';

const initialState = { searchQuery: '' };
const Context = createContext(initialState);
const { Provider } = Context;

const Store = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case 'updateSearchQuery':
				return { ...state, searchQuery: action.payload };
			default:
				return { ...state };
		}
	}, initialState);

	return <Provider value={[state, dispatch]}> {children} </Provider>;
};

export { Context, Store };
