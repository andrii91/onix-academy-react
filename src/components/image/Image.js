import { Component } from "react";
import error from "../../assets/images/error.svg";

class Image extends Component {

  onError(e) {
    e.target.onerror = null;
    e.target.setAttribute('src', error);
    e.target.classList.add('error-image') 

    console.log('error image')
  }

  onLoad(e) {
    if(!e.target.classList.contains('error-image')) {
      e.target.classList.add('success-image') 
    }

    console.log('success image')
  }

  render() {
    const {src, alt} = this.props;
    
    return (
        <img 
          src={src}
          onError={this.onError.bind(this)}
          onLoad={this.onLoad.bind(this)}
          alt={alt}
        />
    );
  }
}

export default Image;
