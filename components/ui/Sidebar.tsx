import {useContext} from 'react'

import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { UIContext } from '@/context/ui';

const menuItems: string[]= ["Inbox", "Started", "Send Email", "Drafts"]

export const Sidebar = () => {

    const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
   <Drawer
   anchor="left"
    open={sideMenuOpen}
    onClose={() => closeSideMenu()}
   >    
        <Box sx={{ width: 250 }}>
        <Box sx={{padding: '5px 10px'}}>
            <Typography
            variant="h4"
            >Menu</Typography>
        </Box>

        <List>
            {
                menuItems.map((item, index) => (
                    <ListItem key={item}>
                        <ListItemButton>
                            {index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/>}
                            <ListItemText primary={item} sx={{ paddingLeft: '10px' }}/>
                        </ListItemButton>
                        
                    </ListItem>
                ))
            }
        </List>

        <Divider/>

        <List>
            {
                menuItems.map((item, index) => (
                    <ListItem key={item}>
                        <ListItemButton>
                            {index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/>}
                            <ListItemText primary={item} sx={{ paddingLeft: '10px' }}/>
                        </ListItemButton>
                        
                    </ListItem>
                ))
            }
        </List>

        </Box>
        
   </Drawer>
  )
}
