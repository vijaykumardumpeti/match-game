import {Component} from 'react'
import './index.css'

export default class NavBar extends Component {
  render() {
    const {score, time} = this.props
    return (
      <nav className="nav-container">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        />
        <li className="scores-container">
          <div className="score-container">
            <p>score: </p>
            <p>{score}</p>
          </div>

          <div className="timer-container">
            <img
              className="timer-image"
              alt="timer"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            />
            <p>{time} sec</p>
          </div>
        </li>
      </nav>
    )
  }
}

