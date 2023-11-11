
import React, { ChangeEvent, useState } from 'react'

import { Button, Box,TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


export const NewEntry = () => {

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

        console.log({ inputValue: inputValue})
        
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
