import React from 'react'

import ListItem from './list-item'
import './ul.css'

const Ul = (props) => {
  return (
    <div className="ul-ul">
      <ListItem></ListItem>
      <ListItem text="Your progress is saved automatically"></ListItem>
      <ListItem text="Don't worry if you make mistakes. Just undo with Ctrl/Cmd + Z"></ListItem>
    </div>
  )
}

export default Ul
