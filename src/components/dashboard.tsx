import React from 'react'


import { Container, Divider, Typography } from '@mui/material'
import Tables from './tables'


export default function Dashboard() {

  

  return (
    <Container>
      <Typography fontWeight={'bold'}>DASHBOARD</Typography>
      <Divider></Divider>
      <Tables></Tables>
    

    </Container>
    
  )
}
