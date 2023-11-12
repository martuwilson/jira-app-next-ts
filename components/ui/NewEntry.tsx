
import React, { ChangeEvent, useState,useContext } from 'react'

import { Button, Box,TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '@/context/entries';


export const NewEntry = () => {

    const {addNewEntry} = useContext(EntriesContext)

    const [isAdding, setIsAdding] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [touch, setTouch] = useState(false)

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if(
            inputValue.trim().length === 0
        ) {
            return
        } 

        addNewEntry(inputValue) // agrega la entrada
        setIsAdding(false); // cierra el formulario
        setTouch(false); // limpia el error
        setInputValue(''); // limpia el input
    }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>  

        {
            isAdding ? (
                <>
                    <TextField
                        fullWidth
                        sx={{ marginBottom: 1, marginTop: 2 }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText={ inputValue.trim().length === 0 && touch ? 'La entrada no puede estar vacia' : null}
                        error={inputValue.trim().length === 0 && touch}
                        value={inputValue}
                        onChange={onTextFieldChanged}
                        onBlur={() => setTouch(true)}
                    />

                    <Box display="flex" justifyContent="space-between">
                        <Button
                            variant='text'
                            color='warning'
                            onClick={() => setIsAdding(false)}
                        >
                            Cancelar
                        </Button>

                        <Button
                            variant='outlined'
                            color='secondary'
                            endIcon={<SaveOutlinedIcon />}
                            onClick={onSave}
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            ) : (<Button
                    startIcon={<AddCircleOutlineOutlinedIcon />}
                    fullWidth
                    variant='outlined'
                    color='warning'
                    onClick={() => setIsAdding(true)}
                >
                    Agregar nueva entrada
                </Button>)
        }

    

    </Box>
  )
}
