import React, { useState } from 'react'
import Header from './components/Header'
import TaskListContainer from './components/TaskListContainer'
import {TaskMenu} from "./components/TaskMenu.jsx";

function App() {

  return (
    <main>

      <Header />
        <TaskMenu />
      <TaskListContainer />
    </main>
  )
}

export default App
