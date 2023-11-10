import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from '.'
/* uso de divs para acceder luego a onDrag, etc */


export const EntryList = () => {
  return (
    <div>
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
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
                <EntryCard/>
            </List>
        </Paper>
    </div>
  )
}
