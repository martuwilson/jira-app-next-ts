import { Button, Box,TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


export const NewEntry = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>  

        <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            fullWidth
            variant='outlined'
            color='warning'
        >
            Agregar nueva entrada
        </Button>

        <TextField
            fullWidth
            sx={{ marginBottom: 1, marginTop: 2 }}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            helperText='Escribe una tarea y presiona guardar'
        />

        <Box display="flex" justifyContent="space-between">
            <Button
                variant='text'
                color='warning'
            >
                Cancelar
            </Button>

            <Button
                variant='outlined'
                color='secondary'
                endIcon={<SaveOutlinedIcon />}
            >
                Guardar
            </Button>
        </Box>

    </Box>
  )
}
