import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import './styling-elements.css'

const StylingElements = (props) => {
  return (
    <div className="styling-elements-container">
      <Helmet>
        <title>Styling-Elements - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Styling-Elements - Intro to teleportHQ"
        />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6cb8c437-7ca7-428a-a43c-952257837c77/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div className="styling-elements-container1">
        <div className="styling-elements-container2">
          <Heading
            text="Use the Visual Inspector to style your elements"
            heading1="Styling Elements"
          ></Heading>
          <h2 className="styling-elements-text Subheading">Desired Outcome</h2>
          <div className="styling-elements-container3">
            <div className="styling-elements-container4">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
                className="styling-elements-image"
              />
              <div className="styling-elements-container5">
                <h1>Title</h1>
                <span>Description</span>
              </div>
            </div>
          </div>
          <div className="styling-elements-ul">
            <ListItem text='You will first group the elements together with Ctrl/Cmd + G or right-click and select "Group"'></ListItem>
            <div className="styling-elements-container6">
              <ListItem text="Select the image element and choose a nice photo from the Asset Manager "></ListItem>
              <div className="styling-elements-container7">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="styling-elements-icon"
                >
                  <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429zM731.429 694.857v182.857h-585.143v-109.714l109.714-109.714 73.143 73.143 219.429-219.429zM256 585.143c-60.571 0-109.714-49.143-109.714-109.714s49.143-109.714 109.714-109.714 109.714 49.143 109.714 109.714-49.143 109.714-109.714 109.714z"></path>
                </svg>
              </div>
            </div>
            <Tip text="To open the Asset Manager, hit Ctrl/Cmd + 3"></Tip>
            <ListItem text="On the right side you will see the Visual Inspector where you can style the elements to your liking"></ListItem>
            <Tip text="Can't find the property you are looking for? Click on the Advanced tab to add custom CSS properties"></Tip>
            <ListItem text="Play around with layout properties, padding, border, radius, and text alignment until you get the desired look"></ListItem>
          </div>
          <h2 className="styling-elements-text3 Subheading">Try it yourself</h2>
          <div className="styling-elements-container8">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/img/default.png"
              className="styling-elements-image1"
            />
            <h1>Heading</h1>
            <span>Text</span>
          </div>
        </div>
        <h2 className="styling-elements-text6 Subheading">
          <span>Bonus - C</span>
          <span>reating responsive layouts</span>
        </h2>
        <ListItem text="If you're feeling up to it you can also experiment with media query styles to make your elements responsive"></ListItem>
        <ListItem text="Just resize the page from the right or left sides until you reach a media query breakpoint "></ListItem>
        <ListItem text="All the styles you set will be applied when the page's width is smaller than the media query breakpoint"></ListItem>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default StylingElements
