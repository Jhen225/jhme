    
import React, { useReducer, useContext, useMemo } from 'react';
import { reducer } from './reducers';
const context = React.createContext();

export function Store() {
    const Provider = function ({ children, initialState = {} }) {
        const [state, dispatch] = useReducer(reducer, initialState);
        const contextValue = useMemo(() => [state, dispatch], [state]);
        return (
            <context.Provider value={contextValue}>{children}</context.Provider>
        );
    }
    const useStore = () => useContext(context)
    return {
        Provider,
        useStore
    };
}