import { Box, Button,  SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'



export default function MyMenu({swapSection}:{swapSection:Function }) {

    const [open, setOpen] = useState(false)

    const toggleDrawer = (isOpen:boolean)=>{
        setOpen(isOpen)

    }

  return (
    <Box   position={'absolute'} left={0}>
        <Button  onClick={()=>toggleDrawer(true)}> Menu</Button>
         <SwipeableDrawer variant="temporary" onClose={()=>toggleDrawer(false)} onOpen={()=>toggleDrawer(true)} open = {open}   >
            <Button onClick={()=>swapSection("Dashboard")}> Dashboard</Button>
            <Button onClick={()=>swapSection("Utenti")}> Utenti</Button>
            
         </SwipeableDrawer>

     </Box>   
  )
}

