import React from 'react'
import { createRoot } from 'react-dom/client'
import desktopImage from '@assets/desktop.jpeg'
import { ReactComponent as PersonSvg } from '@assets/person.svg'
import './index.scss'

const App = () => {
  return (
    <div className={'content'}>
      <p>React Application</p>
      <img src={desktopImage} />
      <PersonSvg />
    </div>
  )
}

const root = createRoot(document.getElementById('root') || document.body)
root.render(<App />)
