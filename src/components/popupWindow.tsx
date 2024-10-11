import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,  TextField } from '@mui/material'
import React, {  useState } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/store'
import { User } from './services/dto'
import { sendData } from './services/slice'


export default function PopupWindow({ isOpen, togglePopup }: { isOpen: boolean, togglePopup: Function }) {
    const { users, deletedUsers } = useAppSelector(state => state.users);
    const [data, setData] = useState<User>({
        id: (users.length + deletedUsers.length).toString(),
        name: "",
        email: '',
        address: { city: '', street: '', suite: '', zipcode: '', geo: { lat: '', lng: '' } }
    });
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <div>
            <Dialog open={isOpen}>
                <DialogTitle>Aggiungi utente</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Per aggiungere il nuovo utente inserisci gentilmente i suoi dati anagrafici
                    </DialogContentText>
                    {Object.keys(data).map(el =>
                        <TextField
                            key={el}
                            disabled={el === 'id'}
                            autoFocus
                            required
                            margin="dense"
                            id={el}
                            name={el}
                            label={el}
                            fullWidth
                            variant='standard'
                            onChange={handleChange}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => togglePopup(false)}>Esci</Button>
                    <Button onClick={() => {
                        dispatch(sendData(data));
                        togglePopup(false);
                    }}>
                        Aggiungi
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
          
            
            
          
        
        
    
 

