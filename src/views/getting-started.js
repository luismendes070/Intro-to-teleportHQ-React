import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import Component1 from '../components/component1'
import './getting-started.css'

const GettingStarted = (props) => {
  return (
    <div className="getting-started-container">
      <Helmet>
        <title>Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta property="og:title" content="Intro to teleportHQ" />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6cb8c437-7ca7-428a-a43c-952257837c77/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <AppComponent></AppComponent>
      <Component1></Component1>
    </div>
  )
}

export default GettingStarted
