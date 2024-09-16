import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import PopupWindow from './popupWindow'

import UserCard from './userCard'
import { UsersContext } from '..'

export default function Users() {

    const filters = ['Surname', 'BirthDate', 'Address']

    const [openPopup, setOpenPopup] = useState(false)
    const [currentFilter, setCurrentFilter] = useState("Surname")
    const [searchText, setSearchText] = useState("")
    
    const { users, deletedUsers}  = useContext(UsersContext)
    const [filtered, setFiltered] = useState(users)
   
   
    
    
   useEffect(()=>{
    async function retrieveData(){
      try {
       const response = await fetch('http://miobackend.com/users');
       const data = await response.json()
       return data
       
      } catch (error) {
        console.log(error)
      }
    
    }
    retrieveData()
    
   }, [])

   
   const deleteUser = (idToDelete:string)=>{
    fetch('http://miobackend.com/users/' + idToDelete, {
        method:'DELETE'
    }).catch(e=>console.log(e))
   
    deletedUsers.push(...users.splice(parseInt(idToDelete),1))
    setFiltered( prev=> {return prev.filter((el)=>el.id!==idToDelete)})
    
 }

    const togglePopup= ( open:boolean)=>{
        setOpenPopup(open)
       }

   const handleSearch = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
   
    setSearchText( e.target.value)
    if(!e.target.value.length){
        setFiltered(users)
       
        return
    }
        
         setFiltered(users.filter(el=> {
          
         return  currentFilter === "BirthDate"?  el[currentFilter].getFullYear()<parseInt(searchText) :
          el[currentFilter].includes(searchText)})
         
        )
         
   }

   const handleSelect = ( event:SelectChangeEvent)=>{
         setCurrentFilter(event.target.value  )
         setFiltered(users.filter(el=>{
         
        return  currentFilter === "BirthDate"? el["BirthDate"].getFullYear()<parseInt(searchText) :
          el[currentFilter].includes(searchText) })
         
        )
       
   }

  return (
    <Box>
    <Typography fontWeight={'bold'}>I TUOI UTENTI</Typography>
    
    <FormControl>
    <TextField name='search' label="Ricerca" value={searchText} onChange={(e)=>handleSearch(e)}></TextField>
    <InputLabel id = "usersFilter"> </InputLabel>
    <Select value={currentFilter}  labelId='usersFilter' onChange={e=>handleSelect(e)}>
       {filters.map(el=><MenuItem key={el} value={el}  >{el}</MenuItem>)}
    </Select>
    </FormControl>

    <br/>
    <Button sx={{margin:2}} onClick={()=>setOpenPopup(true)} >Aggiungi utente</Button>
    
    <PopupWindow togglePopup={togglePopup} isOpen = {openPopup} ></PopupWindow>
    <Stack spacing={2}>
    
    {filtered.map(el=><UserCard key={el.id} user = {el} deleteUser= {deleteUser} ></UserCard>)}
    </Stack>
    </Box>
  )
}

 