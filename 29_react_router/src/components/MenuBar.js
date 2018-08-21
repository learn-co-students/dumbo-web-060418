import React from 'react'
import {Link} from 'react-router-dom'


const MenuBar = (props) => {

  return (
    <div className='ui inverted purple menu'> 
      <Link to='/paintings' className='item'>Index</Link>
      <MyLink to='/about' className='item'>About</MyLink>
    </div>
  )
}

export default MenuBar
