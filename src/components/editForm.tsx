
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { User } from './services/dto'
import { useAppDispatch } from '../redux/store'
import { editData, resetEditUserStatusIdle } from './services/slice'

export default function EditForm({editOpen, setEditOpen, user}: {editOpen:boolean, setEditOpen: Function, user:User}) {
    const [data, setData] = useState<User>(user);
    const dispatch = useAppDispatch();

    const handleChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({...data, [event.target.name]: event.target.value});
    }

    return (
        <div>
            <Dialog open={editOpen}>
                <DialogTitle>Modifica utente</DialogTitle>
                <DialogContent>
                    {Object.keys(user).map(el =>
                        el !== 'id' && (
                            <TextField
                                key={el}
                                autoFocus
                                disabled={el === 'id'}
                                value={data[el]}
                                required
                                margin="dense"
                                id={el}
                                name={el}
                                label={el}
                                fullWidth
                                variant='standard'
                                onChange={(e) => handleChange(e)}
                            />
                        )
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditOpen(false)}>Esci</Button>
                    <Button type="submit" onClick={() => {
                        dispatch(editData(data));
                        setTimeout(() => {
                            resetEditUserStatusIdle();
                        }, 2500);
                        setEditOpen(false);
                    }}>Modifica</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
