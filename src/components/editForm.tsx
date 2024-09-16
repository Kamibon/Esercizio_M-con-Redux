
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { User } from './data/users'

export default function EditForm({editOpen, setEditOpen, user}: {editOpen:boolean, setEditOpen: Function, user:User}) {

    const [data, setData] = useState<User>({ id:user.id, Name:user.Name, Surname:user.Surname, BirthDate: user.BirthDate, CF:user.CF, Address:user.Address})

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        
        
        setData({...data, [event.target.name]:event.target.value})
    }

    const editUser = async()=>{
      try {
        await fetch("http://miobackend.com/users/"+user.id, {
          method:'PATCH',
          body: JSON.stringify(data),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
      })
      } catch (error) {
        
      }
        
        setEditOpen(false)
     }


  return (
    
    <div>
        
        <Dialog open = {editOpen}>
    <DialogTitle>Modifica utente</DialogTitle>
    <DialogContent>
       
      
        {Object.keys(user).map(el=>
        <TextField key={el} autoFocus disabled = {el==='id'} value={ user[el]} required margin="dense" id={el} type={el === 'BirthDate'? 'date': 'text'}  name={el} label={el} fullWidth variant='standard' onChange={(e)=>handleChange(e)}   />)}
         
     </DialogContent>
     <DialogActions>
       <Button onClick={()=>{ setEditOpen(false)}}>Esci</Button>
       <Button type="submit" onClick={()=>editUser()} > Modifica</Button>
     </DialogActions>
    </Dialog></div>
  )
}
