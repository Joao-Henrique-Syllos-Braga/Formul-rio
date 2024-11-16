import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Submit from './components/Submit'

function App() {

  return (
    <>
    <form action="">
      <div className="container">
        <div className="container-i">
          <Input type="name" placeholder="Name"/>
          <Input type="email" placeholder="E-mail"/>
          <Input type="password" placeholder="Password"/>
        </div>
        <Submit type="submit" placeholder="Submit"/>
      </div>
    </form>
    </>
  )
}

export default App;
