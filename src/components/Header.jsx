import React from 'react'

const Header = ({setIsAdding}) => {

  const myStyle = {
    color : '#BF8B59'
  }

  const btnStyle = {
    backgroundColor : "#BF8B59",
    color : 'white',
    border : 'none'
  }

  return (
    <header>
        <h1 style={myStyle}>Employee Management System</h1>
        <div>
            <button style={btnStyle} onClick={()=>setIsAdding(true)} className='round-button '>Add Employee</button>
        </div>
    </header>
  )
}

export default Header