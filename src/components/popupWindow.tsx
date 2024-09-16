import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,  TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import {User} from './data/users'
import { UsersContext } from '..'

export default  function PopupWindow({isOpen, togglePopup}: {isOpen: boolean, togglePopup: Function}) {

    const {users, newUsers} = useContext(UsersContext)
    const [data, setData] = useState<User>({ id: (users.length ).toString() , Name:"", Surname:"", BirthDate: new Date(1950, 1,1), CF:"", Address:""})

     const sendData = async()=>{
    
      try {
        await fetch('http://miobackend.com/users', {
          method:'POST',
          body: JSON.stringify(data),
          headers : {
          "Content-Type": "application/json"
          }
      })
      } catch (error) {
        console.log(error)
      }
      users.push(data)
      newUsers.push(data)
      setData({...data, id: (parseInt(data.id) + 1).toString()})
      togglePopup(false)
        
    }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
         setData({...data, [event.target.name]: event.target.type ==="date"? new Date(event.target.value): event.target.value})
    }
  
  return (
    <div>
       <Dialog  open = {isOpen}>
       <DialogTitle>Aggiungi utente</DialogTitle>
       <DialogContent>
          <DialogContentText>
            Per aggiungere il nuovo utente inserisci gentilmente i suoi dati anagrafici
          </DialogContentText>
         
        
           {Object.keys(data).map(el=><TextField key={el} disabled = {el==='id'} autoFocus required margin="dense" id={el} type={el === 'BirthDate'? 'date': 'text'}  name={el} label={el}  fullWidth variant='standard'    onChange={(e)=>handleChange(e)}/>)}
          
           </DialogContent>
           <DialogActions>
          <Button onClick={()=>{ togglePopup(false)}}>Esci</Button>
          <Button   onClick={()=>sendData()}>Aggiungi</Button>
        </DialogActions>
        </Dialog>

</div>  
      )
    }    
          
            
            
          
        
        
    
 

