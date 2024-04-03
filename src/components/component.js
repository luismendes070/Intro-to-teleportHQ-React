import React from 'react'

import Heading from './heading'
import Ul from './ul'
import Footer from './footer'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <Heading heading1="Welcome to teleportHQ!"></Heading>
      <Ul></Ul>
      <Footer></Footer>
    </div>
  )
}

export default AppComponent
