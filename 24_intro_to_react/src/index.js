import React from 'react'
import ReactDOM from 'react-dom'
import { Navbar, Article } from './Navbar'



// ReactDOM.render(whatToRender, whereToPutit)
// React.createElement(whatElementTag, props, children)

// const myCreateElement = (type, props={}, children) => {
//   return {
//     $$typeof: Symbol.for('react.element'),
//     type: type,
//     props: { ...props, children: children },
//     ref: null
//   };
// }


// pre jsx
// const Article = (props) => {
//   return (
//     React.createElement('div', {}, [
//       React.createElement('h1', {}, props.title),
//       React.createElement('p', {}, props.content)
//   ]))
// }


// with jsx



// pre jsx
// const Navbar = (props) => {
//   return (
//     React.createElement('div', { className: `ui inverted ${props.color} menu` }, [
//       React.createElement('a', { className: "item"}, [
//         React.createElement('h2', { className: "ui header"}, [
//           React.createElement('i', { className: 'paw icon'}, null),
//           React.createElement('div', { className: 'content'}, props.content),
//           React.createElement('div', { className: "sub header"}, props.subheader)
//         ])
//       ])
//     ])
//   )
// }


ReactDOM.render(
  <div>
    <Navbar content="first app" subheader="this is the best" color="blue" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
    <Article title="WELCOME TO REACT" content="I'm so excited" />
  </div>,
  document.getElementById('main')
);









///
