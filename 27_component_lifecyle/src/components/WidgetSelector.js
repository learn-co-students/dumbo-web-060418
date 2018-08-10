import React, { Component } from 'react'


class WidgetSelector extends Component {

  render () {
    return (
      <div className="app-children">
        <button onClick={this.props.toggleWidget} >
          Switch To Stocks
        </button>
      </div>
    )
  }
}

export default WidgetSelector
