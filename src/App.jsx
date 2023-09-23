import React, { useState } from 'react'
import Header from './components/Header'
import TaskListContainer from './components/TaskListContainer'
function App() {

  return (
    <main className="max-container">

      <Header />
      <TaskListContainer />
    </main>
  )
}

export default App
