import React from 'react'

const Box = (props) => {
  return (
    <div className='box'>
        <div className='box--innerbox'>
            <div className='box--innerbox-content'>
             <h1>{props.name}</h1>
             <img className='box--picture' src={props.img} width={300} height={300} alt="this is car image" />
            </div>
        <div className='box--innerbox-blur'>
        </div>

        </div>
    </div>
  )
}

export default Box