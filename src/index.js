import React from 'react'
import { render } from 'react-dom'
import App from './App'

window.webComponent.init = config => {
  const appDiv = document.getElementById('myapp')
  render(<App {...config} />, appDiv)
}

window.webComponentAsyncInit()
