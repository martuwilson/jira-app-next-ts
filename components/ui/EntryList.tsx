import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { EntryCard } from './'
import { EntryStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries';
/* uso de divs para acceder luego a onDrag, etc */

interface Props {
    status : EntryStatus;
}

export const EntryList:FC<Props> = ({ status }) => {

    const { entries } = useContext(EntriesContext);
    
    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status) , [entries]);

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id= event.dataTransfer.getData('text');
        console.log({id});
    }

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }

  return (
    <div onDrop={ onDropEntry } onDragOver={ allowDrop }>
        <Paper
            sx={{
                height: 'calc(100vh - 250px)',
                overflowY: 'scroll',
                backgroundColor: 'transparent',
                padding: '3px 5px',
            }}
        >
            <List
            sx={{ opacity: 1 }}
            >
                {entriesByStatus.map(entry => (
                    <EntryCard
                    key={entry._id}
                    entry={entry}
                    />
                ))}
            </List>
        </Paper>
    </div>
  )
}
