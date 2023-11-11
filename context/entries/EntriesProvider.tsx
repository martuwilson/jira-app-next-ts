import React, { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, EntriesReducer } from './';
import { Entry } from '@/interfaces';


export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: lorem ipsum dolor sit amet',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso: perdio boquita',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: si pierde river con central boca afuera de la copa',
            status: 'finished',
            createdAt: Date.now() - 10000,
        }
    ],
};

export const EntriesProvider: FC<React.PropsWithChildren<{}>> = ({ children }) => {


    const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);
    

    return (
        <EntriesContext.Provider value={{ ...state }}>
            {children}
        </EntriesContext.Provider>
    );
};