import React from 'react'
import Typewriter from 'typewriter-effect';


const Writer = () => {
  
  return (
    <div>
<Typewriter
  options={{
    strings: ['How to get strong quickly', 'How to code React', 'How to get Intership', 'How to get movies for free'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>
  )
}

export default Writer