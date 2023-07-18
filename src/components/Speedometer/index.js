// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed >= 0) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
    if (speed === 200) {
      this.setState(() => ({speed: 200}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed === 0) {
      this.setState(prevState => ({speed: prevState.speed}))
    } else if (speed <= 200) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    const meterBoard = (
      <div className="bg-cont">
        <h1 className="speed-head">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="speed-instruction">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="btn-cont">
          <button
            className="ac-btn btn"
            onClick={this.onAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button className="br-btn btn" onClick={this.onBreak} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
    return meterBoard
  }
}

export default Speedometer
