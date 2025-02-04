import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {Count: 0}
  onIncrement = () => {
    this.setState(prevState => {
      return {Count: prevState.Count + 1}
    })
  }
  onDecrement = () => {
    this.setState(prevState => {
      return {Count: prevState.Count - 1}
    })
  }
  render() {
    const {Count} = this.state
    return (
      <div className="container">
        <h1 className="heading">{Count}</h1>
        <p className="count">0</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
