// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/header.jsx'
import Form from './components/meme.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  )
}

export default App
