import { Component } from "react";
import error from "../../assets/images/error.svg";

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorClass: '',
      iconError: '',
    };
    
  }
  
  onError = (e) => {
    e.target.onerror = null;
    
    this.setState({ 
      errorClass: 'error-image',
      iconError: error
    });
    
    console.log('error image')
  }

  onLoad = (e) => {

    if(!e.target.classList.contains('error-image')) {
      this.setState({ 
        errorClass: 'success-image',
        iconError: ''
      });
    }

    console.log('success image')
  }

  render() {
    const {src, alt} = this.props;
    const { errorClass, iconError } = this.state;
    return (
        <img 
          src={iconError === '' ? src : iconError}
          onError={this.onError}
          onLoad={this.onLoad}
          alt={alt}
          className={errorClass}
        />
    );
  }
}

export default Image;
