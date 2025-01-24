import React from 'react'
import './connect.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

const Connect = () => {
  return (
    <section id="connect">
        <h1>Connect Me</h1>
        <div className="images">
           <a className="imgs" href="https://www.linkedin.com/in/divya-agrawal-0676b6228/.linkedin.com/in/divya-agrawal-0676b62
           28" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="link" />   
      </a>
            <a className="imgs" href="https://github.com/Divyaagrawal0702/learn.git" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="link"/></a>
                 </div>
    </section>
  )
}

export default Connect
