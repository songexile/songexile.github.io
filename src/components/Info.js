import React from 'react'
import Picture from '../img/me.jpg'

const Info = () => {
    return (
        <div className='box-big'>
            <div className='box--innerbox'>
                <div className='box--innerbox-content'>
                 <h1>Hello 😊 i'm Otis Wales.</h1>
                 <h2>I am a university student that studies Computer Science, I love thinking of ways to simplify life through the use of Computer Science.</h2>
                 <h3>Currently learning <b>React</b>, <b>Javascript</b> and mastering <b>Java</b></h3>
                 <img className='box--picture' src={Picture} width={200} height={200} alt="this is car image" />
                </div>
            <div className='box--innerbox-blur'>
            </div>
    
            </div>
        </div>
      )
}

export default Info