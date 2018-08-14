import React, { Component } from 'react';

class Searchbar extends Component {

  render() {
    return (
      <div>
        <input type='text'
          value={this.props.search}
          onChange={(e) => this.props.updateSearch(e.target.value)}
          placeholder='search here'
        />
      </div>
    );
  }
}

export default Searchbar