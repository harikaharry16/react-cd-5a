// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {name: 'Subscribe'}

  onSubscribe = () => {
    const {name} = this.state
    if (name === 'Subscribe') {
      this.setState(prevState => ({name: 'Subscribed'}))
    } else if (name === 'Subscribed') {
      this.setState(prevState => ({name: 'Subscribe'}))
    }
  }

  render() {
    const {name} = this.state
    return (
      <div className="bg-container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="bttn" onClick={this.onSubscribe}>
          {name}
        </button>
      </div>
    )
  }
}
export default Welcome
