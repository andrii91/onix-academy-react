import { Component } from "react";

class HeroView extends Component {

  render() {
    const {projectPhoto, projectInfo, title, lessTitle, lessList} = this.props;
    return (
        <>
          <div className="col-xl-7 hero-item">
            <h5>{projectInfo}</h5>
            <h1>{title}</h1>
            <h2>{lessTitle}</h2>
            <ul className="tokens-list">
              {lessList.map((item, index) => (
                <li key={'ul-list-'+index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-xl-5">
            <div className="hero-img">
              <img src={projectPhoto}  alt={title} />
            </div>
          </div>
        </>
    );
  }
}

export default HeroView;
