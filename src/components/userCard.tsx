
import { Button, Card,  CardActions, CardContent,   Typography } from '@mui/material'
import  { useState } from 'react'

import Modal from './modal';
import EditForm from './editForm';

import { User } from './services/dto';
import { useAppDispatch } from '../redux/store';
import { addDeletedUser, deleteData, resetDeleteUserStatus } from './services/slice';

export default function UserCard({ user }: { user: User }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDeleteUser = () => {
    dispatch(deleteData(user.id));
    dispatch(addDeletedUser(user));
    setTimeout(() => {
      resetDeleteUserStatus();
    }, 2500);
  };

  return (
    <div>
      <Card variant="outlined">
        <Button onClick={() => setIsModalOpen(true)}>
          <Typography fontWeight={'bold'}>{user.name}</Typography>
        </Button>
        <CardContent>
          <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => setEditOpen(true)}>Modifica utente</Button>
            <Button onClick={handleDeleteUser}>Elimina utente</Button>
          </CardActions>
        </CardContent>

        {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} user={user} />}
        {editOpen && <EditForm editOpen={editOpen} setEditOpen={setEditOpen} user={user} />}
      </Card>
    </div>
  );
}

