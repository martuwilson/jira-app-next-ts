import React, { FC, useReducer } from 'react';

import { UIContext } from './';
import { uiReducer } from './';

export interface UIState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    isAddingEntry: false,
};

export const UIProvider: FC<React.PropsWithChildren<{}>> = ({ children }) => {


    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () =>{
        dispatch({type: 'UI - Open Sidebar'})
    }

    const closeSideMenu = () =>{
        dispatch({type: 'UI - Close Sidebar'})
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({ type: 'UI - Set isAddingEntry', payload: isAdding });
    
    }

    return (
        <UIContext.Provider
        value={{ 
            ...state,

            //Methods
            openSideMenu,
            closeSideMenu,
            
            setIsAddingEntry,
        }}>
            {children}
        </UIContext.Provider>
    );
};