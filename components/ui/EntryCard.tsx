import { FC, DragEvent } from 'react'
import { Card, CardActionArea,CardContent,Typography,CardActions } from '@mui/material'

import { Entry } from '@/interfaces'

interface Props {
    entry: Entry;
}

export const EntryCard:FC<Props> = ({ entry }) => {

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id)
    }

    const onDragEnd = (event: DragEvent) => {

    }


  return (
    <Card
    sx={{ marginBottom: 1 }}
    draggable
    onDragStart={onDragStart}
    /* onDragEnd={ onDragEnd } */
    >
        <CardActionArea>
            <CardContent>
                <Typography
                sx={{ whiteSpace: 'pre-line' }}
                >
                    {entry.description}
                </Typography>
            </CardContent>

            <CardActions
            sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}
            >
                <Typography variant='body2'>
                    hace 30 minutos
                </Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}
