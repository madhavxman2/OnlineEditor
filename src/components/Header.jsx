import React from 'react'
import { AppBar,Toolbar,styled } from '@mui/material'
import logo from '../logo.png'; 
const Container =styled(AppBar)`
    background:#060606;
    height:9vh;
`
export default function Header() {

  return (
  <Container position='static'>
    <Toolbar>
        <img src={logo} alt="logo" width={"50"}/>
        <h1>Mcsharp</h1>
    </Toolbar>
  </Container>
  )
}
