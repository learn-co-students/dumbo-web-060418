import React from 'react'

// export default Navbar

const Navbar = (props) => {
  return (
    <div className={`ui inverted ${props.color} menu`}>
        <a className='item'>
          <h2 className="ui header">
            <i className="paw icon"></i>
            <div className="content">
              {props.content}
            </div>
            <div className="sub header">
              {props.subheader}
            </div>
          </h2>
        </a>
      </div>
  )
}


const Article = (props) => {
  return (
    <div>
      <h1> {props.title} </h1>
      <p> {props.content} </p>
    </div>
  )
}

export { Navbar, Article }











//
