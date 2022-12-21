import {Component} from 'react'
import './index.css'

export default class TabItem extends Component {
  render() {
    const {
      key,
      eachObject,
      changeState,
      styling1,
      styling2,
      styling3,
    } = this.props
    const {tabId, displayText} = eachObject

    this.changeTheState = () => {
      changeState(tabId)
    }
    let text
    if (tabId === 'FRUIT') {
      text = styling1
    }
    if (tabId === 'PLACE') {
      text = styling2
    }
    if (tabId === 'ANIMAL') {
      text = styling3
    }

    return (
      <li key={key}>
        <button
          onClick={this.changeTheState}
          className={`button-style ${text}`}
          type="button"
        >
          {displayText}
        </button>
      </li>
    )
  }
}
