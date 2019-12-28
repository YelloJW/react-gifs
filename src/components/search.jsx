import React, {Component} from 'react'

import App from './app.jsx'


class Search extends Component {

  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <div>
        <input
        className="form-search"
        type="text"
        onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Search;
