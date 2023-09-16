import React from 'react'
import Navbar from './components/Layout/navbar'
import TitleLayouts from './components/Layout/TitleLayouts'
import AuthLayouts from './components/Layout/AuthLayouts'
import TableLayouts from './components/Layout/TableLayouts'
import ButtonList from './components/Elements/Button/ButtonList'
function App() {  
  return (
    <div>
      <Navbar />
      <TitleLayouts title="Create Product"/>
      <AuthLayouts title="Detail Product"/>
      <TableLayouts title="List Product"></TableLayouts>   
      <ButtonList /> 
    </div>
    
 
  )
}

export default App
