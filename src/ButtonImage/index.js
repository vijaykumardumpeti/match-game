import {Component} from 'react'
import './index.css'

export default class ButtonImage extends Component {
  render() {
    const {key, eachObject, checkSameClickedOrNot} = this.props
    const {id, thumbnailUrl} = eachObject

    this.onCheckSameClickedOrNot = () => {
      checkSameClickedOrNot(id)
    }

    return (
      <>
        <li key={key}>
          <button
            onClick={this.onCheckSameClickedOrNot}
            className="image-button"
            type="button"
          >
            <img className="card-image" alt="thumbnail" src={thumbnailUrl} />
          </button>
        </li>
      </>
    )
  }
}
