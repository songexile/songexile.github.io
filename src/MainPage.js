import React from 'react'
import Box from './components/Box'
import Footer from './components/Footer'

export const MainPage = () => {
  return (
    <>
    <div className='mainpage'>
            <div className='mainpage--left'>
                <div className='mainpage--left--blur'></div>
                <div className='mainpage--left--blur2'></div>
            </div>
            <div className='mainpage--right'></div>
    </div>
    <div className='mainpage-middle-element'></div>

    <div className='mainpage--container'>
        <Box/>
        <Box/>
        <Box/>
        
    </div>
    <Footer/>
    </>
    
  )
}
