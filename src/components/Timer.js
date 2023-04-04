import { Component } from "react";

class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {seconds: 0, time: {}};
    }

    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
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
  
    tickSeconds() {
      this.setState(({seconds}) => ({
        seconds: seconds+1,
        time: this.secondsToTime(seconds)
      }))
    }
  
    render() {
      return (
        <div>
          <h2>Ви знаходитесь на сайті: {this.state.time.h} : {this.state.time.m} : {this.state.time.s}.</h2>
        </div>
      );
    }
  }

  export default Timer;