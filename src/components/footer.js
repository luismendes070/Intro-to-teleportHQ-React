import React from 'react'

import PropTypes from 'prop-types'

import Next from './next'
import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-footer">
      <span className="footer-text Subheading">{props.text}</span>
      <Next
        text="Hit Ctrl/Cmd + Arrow Down for the next step"
        rootClassName="next-root-class-name"
      ></Next>
    </div>
  )
}

Footer.defaultProps = {
  text: "Let's do this!",
}

Footer.propTypes = {
  text: PropTypes.string,
}

export default Footer
