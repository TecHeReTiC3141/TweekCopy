import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1 className="text-3xl font-bold underline px-4">
        Hello world!
      </h1>
    </main>
  )
}

export default App
