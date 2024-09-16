
import { Button, Card,  CardActions, CardContent,   Typography } from '@mui/material'
import  { useState } from 'react'
import { User } from './data/users'
import Modal from './modal';
import EditForm from './editForm';

export default function UserCard(props: {user:User, deleteUser: Function}) {

    const user = props.user;
    const deleteUser = props.deleteUser;

 const [isModalOpen, setIsModalOpen] = useState(false)
 const [editOpen, setEditOpen] = useState(false)
 


  return (
    <div>
        <Card variant="outlined"> 
            <Button onClick={()=>setIsModalOpen(true)}>
            <Typography fontWeight={'bold'}>{user.Name + "  "+ user.Surname}</Typography>
            </Button>
           <CardContent >
             
                 <CardActions disableSpacing sx={{ display:'flex', justifyContent:'center'}}>
                    <Button onClick={()=>setEditOpen(true)}> Modifica utente </Button>
                    <Button  onClick={()=>deleteUser(user.id)}> Elimina utente </Button>
                 </CardActions>

          

           </CardContent>
           
           {isModalOpen && <Modal isModalOpen = {isModalOpen} setIsModalOpen={setIsModalOpen} user={user}></Modal>}
           {editOpen && <EditForm editOpen = {editOpen} setEditOpen={setEditOpen} user={user}></EditForm>}
          
           

        </Card>
     

    </div>
  )
}

