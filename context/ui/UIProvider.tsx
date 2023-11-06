import React, { FC, useReducer } from 'react';

import { UIContext } from './';
import { uiReducer } from './';

export interface UIState {
    sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
};

export const UIProvider: FC<React.PropsWithChildren<{}>> = ({ children }) => {


    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);


    return (
        <UIContext.Provider value={{ sideMenuOpen: false }}>
            {children}
        </UIContext.Provider>
    );
};