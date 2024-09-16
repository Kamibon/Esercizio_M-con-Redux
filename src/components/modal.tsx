
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

import { User } from './data/users'

export default function Modal({isModalOpen, setIsModalOpen, user} : { isModalOpen :boolean, setIsModalOpen: Function, user:User}) {
 
   

  return (
    <div>
      <Dialog open = {isModalOpen}>
    <DialogContent>
      <DialogTitle>{user.Name + " "+ user.Surname}</DialogTitle>
      {Object.keys(user).map(key=> <DialogContentText key={key}> { key + ": " + user[key] }</DialogContentText>)}
      
    </DialogContent>
    <DialogActions>
       <Button onClick={()=>setIsModalOpen(false)}>Chiudi</Button>

    </DialogActions>
</Dialog></div>
  )
}
