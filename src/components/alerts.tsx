import { Alert } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../redux/store'

export default function Alerts() {
  const {createUserStatus, deleteUserStatus, editUserStatus} = useAppSelector(state => state.users);

  const renderAlert = (status:string, successMessage:string, errorMessage:string) => {
    if (status === "successfully") {
      return <Alert sx={{zIndex: 2, position:'fixed', top:0, right:0}} variant='filled' severity='success'>{successMessage}</Alert>;
    } else if (status === "failed") {
      return <Alert sx={{zIndex: 2, position:'fixed', top:0, right:0}} variant='filled' severity='error'>{errorMessage}</Alert>;
    }
    return null;
  };

  return (
    <div>
      {renderAlert(createUserStatus, "L'utente è stato aggiunto correttamente", "Errore nell'aggiunta dell'utente")}
      {renderAlert(deleteUserStatus, "Eliminazione dell'utente avvenuta con successo", "Errore nell'eliminazione dell'utente")}
      {renderAlert(editUserStatus, "Modifica dell'utente avvenuta con successo", "Errore nella modifica dell'utente")}
    </div>
  );
}

 