import React from 'react'
import AboutPages from './Pages/AboutPages'
import LandingPages from './Pages/LandingPages'
function App() {

  return (
    <>
      <LandingPages></LandingPages>
      <AboutPages tittle="About Us" description="One Piece is a popular Japanese manga and anime series created by Eiichiro Oda. It is set in a world of vast oceans and follows the adventures of Monkey D. Luffy, a young and ambitious pirate with the goal of finding the legendary treasure known as One Piece. The series is known for its unique and diverse cast of characters, each with their own special abilities and quirks." />
    </>
  )
}

export default App
