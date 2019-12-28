import React, {Component} from 'react';

class Gif extends Component {

  click = () => {
    if (this.props.selectGif) {
    this.props.selectGif(this.props.id)
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <div className="gif">
        <img src={src} alt="" onClick={this.click}/>
      }
      </div>
    )
  }
}


export default Gif;
