import { Component } from 'react';
import PropTypes from 'prop-types';
import error from '../../assets/images/error.svg';

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: 0,
    };
  }
  
  onError = () => {
    this.setState({ 
      showError: 1,
    });
  };

  onLoad = (e) => {
    if (!e.target.classList.contains('error-image')) {
      this.setState({ 
        showError: 0,
      });
    }
  };

  render() {
    const { src, alt } = this.props;
    const { showError } = this.state;
    return (
      <img 
        src={!showError ? src : error}
        onError={this.onError}
        onLoad={this.onLoad}
        alt={alt}
        className={showError ? 'error-image' : ''}
      />
    );
  }
}

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

Image.defaultProps = {
  alt: null
};
