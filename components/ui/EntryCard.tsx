import { Card, CardActionArea,CardContent,Typography,CardActions } from '@mui/material'

export const EntryCard = () => {
  return (
    <Card
    sx={{ marginBottom: 1 }}
    >
        <CardActionArea>
            <CardContent>
                <Typography
                sx={{ whiteSpace: 'pre-line' }}
                >
                    Esto es descripcion
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
