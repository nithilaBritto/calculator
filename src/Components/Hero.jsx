import React from 'react'

function Hero() {
    const changeBG=(event)=>{
        const backgroundCol=event.target.checked?"#242424":"white"
        document.documentElement.style.setProperty('--bodyColor', backgroundCol)
    }
  return (
    <div className='calc-div'>
        <div className='toggle-btn' >
            <input type="checkbox" id="toggle-switch" onClick={changeBG}></input>
            <label htmlFor="toggle-switch" className="switch" ></label>
        </div>

    </div>
  )
}

export default Hero