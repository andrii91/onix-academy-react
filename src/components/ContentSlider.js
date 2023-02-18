import React, { Component } from "react";
import Slider from "react-slick";

import icon1 from "../assets/images/group7184.svg";
import basic from "../assets/images/basic.svg";
import rareInfo from "../assets/images/rare-info.svg";
import basicInfo from "../assets/images/basic-info.svg";
import legendary from "../assets/images/legendary.svg";
import legendaryInfo from "../assets/images/legendary-info.svg";
import rare from "../assets/images/rare.svg";

import uniqueImg from "../assets/images/img726.webp";
import uniqueImg2 from "../assets/images/img727.webp";
import uniqueImg3 from "../assets/images/img728.webp";


export default class ContentSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          imageFront: basic,
          uniqueImg: uniqueImg,
          title: 'Markuz Fluid Art',
          wrd: '0.078',
          icon: rareInfo,
          iconText: 'Rare',
          author: 'By Indra Rakelna'
        },
        {
          imageFront: rare,
          uniqueImg: uniqueImg2,
          title: 'Markuz Fluid Art',
          wrd: '0.08',
          icon: basicInfo,
          iconText: 'Basic',
          author: 'By Indra Rakelna Mainly Super lon'
        },
        {
          imageFront: legendary,
          uniqueImg: uniqueImg3,
          title: 'Markuz Fluid Art 3',
          wrd: '0.6',
          icon: legendaryInfo,
          iconText: 'Legendary',
          author: 'By Indra Rakelna'
        },
        {
          imageFront: basic,
          uniqueImg: uniqueImg,
          title: 'Markuz Fluid Art',
          wrd: '1.0',
          icon: legendaryInfo,
          iconText: 'Legendary',
          author: 'By Indra Rakelna'
        }
      ]
    }
  }
    render() {
      let sliders = this.state.slides;

      const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true
            }
        },
    
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
    
            }
        }
      ]
      };
      return (
          <section className="unique" id="game">
            <div className="container">
                <h2>Unique content</h2>
                <Slider {...settings}  className="unique-slider">
                {Array.prototype.map.call(sliders, function (item, index) {
                  return (
                    <div className="item" key={index}>
                      <div className="unique-card active">
                        <div className="unique-card-inner">
                          <div className="unique-card-front">
                            <img src={item.imageFront} alt=""/>
                          </div>
                          <div className="unique-card-back">
                            <div className="unique-img">
                                <img src={item.uniqueImg} alt=""/>
                            </div>
                            <div className="unique-content">
                              <h6>{item.title}</h6>
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <div className="unique-info">
                                    <img src={icon1} alt=""/>
                                    <p>{item.wrd}WRD</p>
                                  </div>
                                </div>
                                <div className="col-6 text-right">
                                  <div className="unique-info">
                                    <img src={item.icon} alt=""/>
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
                }, this)}
                </Slider>
            </div>
          </section>
      );
    }
  }