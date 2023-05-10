import { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, };
  }
 
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tickSeconds(),
      1000
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  secondsToTime(secs) {
    const hours = Math.floor(secs / (60 * 60));
  
    const divisorForMinutes = secs % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);
  
    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);
  
    const obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  tickSeconds() {
    this.setState(({ seconds }) => ({
      seconds: seconds + 1,
    }));
  }
  
  render() {
    const {
      seconds 
    } = this.state;
    return (
      <div>
        <h2>
          Ви знаходитесь на сайті:
          {this.secondsToTime(seconds).h}
          {' '}
          :
          {this.secondsToTime(seconds).m}
          {' '}
          :
          {this.secondsToTime(seconds).s}
          .
        </h2>
      </div>
    );
  }
}

export default Timer;
