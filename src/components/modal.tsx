

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { User } from './services/dto'
export default function Modal({ isModalOpen, setIsModalOpen, user }: { isModalOpen: boolean, setIsModalOpen: Function, user: User }) {
  return (
    <Dialog open={isModalOpen}>
      <DialogContent>
        <DialogTitle>{user.name}</DialogTitle>
        {Object.entries(user).map(([key, value]) => (
          <DialogContentText key={key}>{`${key}: ${value}`}</DialogContentText>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsModalOpen(false)}>Chiudi</Button>
      </DialogActions>
    </Dialog>
  );
}
