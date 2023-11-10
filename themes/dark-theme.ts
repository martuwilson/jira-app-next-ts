import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: grey[800],
        },
        primary: {
            main: '#4a148c'
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red[400]
        }
        
    },

    components: {
        MuiAppBar: {
            defaultProps: {
                
            },
            styleOverrides:{
                root: {
                    /* background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' */
                    background: '#4a148c',
                }
            }
        }
    }
});