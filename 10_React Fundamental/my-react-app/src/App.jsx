import React from "react"
import Navbar from "./Component/Navbar";
import MainForm from "./Layout/MainForm";
import TabelLayout from "./Layout/TabelLayout";
import TittleTabel from "./Layout/TittleTabel";
import MainTabel from "./Layout/MainTabel";
function App() {

  return (
    <>
      <Navbar />
      <MainForm></MainForm>
      <TittleTabel tittle="List Product"></TittleTabel>
      <MainTabel></MainTabel>
    </>
  )
}

export default App;
