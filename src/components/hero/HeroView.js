import { Component } from 'react';
import PropTypes from 'prop-types';

class HeroView extends Component {
  render() {
    const {
      projectPhoto, projectInfo, title, lessTitle, lessList 
    } = this.props;
    return (
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 hero-item">
              <h5>{projectInfo}</h5>
              <h1>{title}</h1>
              <h2>{lessTitle}</h2>
              <ul className="tokens-list">
                {lessList.map((item) => (
                  <li key={`ul-list-${item}`}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-xl-5">
              <div className="hero-img">
                <img src={projectPhoto} alt={title} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeroView;

HeroView.propTypes = {
  projectPhoto: PropTypes.string.isRequired,
  projectInfo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lessTitle: PropTypes.string.isRequired,
  lessList: PropTypes.arrayOf(PropTypes.string)
};

HeroView.defaultProps = {
  lessList: null
};
