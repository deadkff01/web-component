import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Title from './components/Common/Title'
import Container from './components/Common/Container'
import Button from './components/Common/Button'
import Routes from './Routes'

const App = ({ title, number, dispatchFunction }) => {
  const [count, setCount] = useState(0)
  const updateVendor = () => {
    const newCount = count + 1
    setCount(newCount)
    dispatchFunction(newCount)
  }

  return (
    <div>
      <BrowserRouter>
        <Title>
          {title} {number}
        </Title>
        <h2 style={{ textAlign: 'center' }}>{count}</h2>
        <Container>
          <Button type="button" onClick={updateVendor}>
            Click me
          </Button>
          <Routes />
        </Container>
      </BrowserRouter>
    </div>
  )
}

export default App
