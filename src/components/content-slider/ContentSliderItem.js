import { Component } from "react";

import icon1 from "../../assets/images/group7184.svg";

export default class ContentSliderItem extends Component {
  render() {
    const { item, index } = this.props;

    return (
      <div className="item">
        <div className="unique-card active">
          <div className="unique-card-inner">
            <div className="unique-card-front">
              <img src={item.imageFront} alt={index+'_image-front'}/>
            </div>
            <div className="unique-card-back">
              <div className="unique-img">
                  <img src={item.uniqueImg} alt={index+'_image-back'}/>
              </div>
              <div className="unique-content">
                <h6>{item.title}</h6>
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="unique-info">
                      <img src={icon1} alt={item.title}/>
                      <p>{item.wrd}WRD</p>
                    </div>
                  </div>
                  <div className="col-6 text-right">
                    <div className="unique-info">
                      <img src={item.icon} alt={index+'_image-unique'}/>
                      <p>{item.iconText}</p>
                    </div>
                  </div>
                </div>
                <div className="name">{item.author}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}