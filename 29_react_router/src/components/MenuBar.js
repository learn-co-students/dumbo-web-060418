import React from 'react'
import { Link } from 'react-router-dom'


const MenuBar = (props) => {

  return (
    <div className='ui inverted purple menu'>
      <Link className='item' to='/'>Home</Link>
      <Link className='item' to='/about'>About</Link>
      <Link className='item' to='/paintings'>All Paintings</Link>
     </div>
  )
}


export default MenuBar
