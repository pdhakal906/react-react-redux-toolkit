import React from 'react'

const Section = ({ data, show }) => {


  return (
    <div>
      <h1>Section Page</h1>
      <h1>{data}</h1>
      <button onClick={show}>Alert</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, veritatis omnis necessitatibus maxime minima deleniti, natus distinctio aspernatur quia quam officia voluptate, iste commodi debitis ab ea at beatae magnam!</p>
    </div>
  )
}

export default Section
