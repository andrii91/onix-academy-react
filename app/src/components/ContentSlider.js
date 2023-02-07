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
    render() {
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
                <div className="item">
                  <div className="unique-card active">
                    <div className="unique-card-inner">
                      <div className="unique-card-front">
                        <img src={basic} alt=""/>
                      </div>
                      <div className="unique-card-back">
                        <div className="unique-img">
                            <img src={uniqueImg} alt=""/>
                        </div>
                        <div className="unique-content">
                          <h6>Markuz Fluid Art</h6>
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="unique-info">
                                <img src={icon1} alt=""/>
                                <p>0.078WRD</p>
                              </div>
                            </div>
                            <div className="col-6 text-right">
                              <div className="unique-info">
                                <img src={rareInfo} alt=""/>
                                <p>Rare</p>
                              </div>
                            </div>
                          </div>
                          <div className="name">By Indra Rakelna</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="unique-card active">
                    <div className="unique-card-inner">
                        <div className="unique-card-front">
                          <img src={rare} alt=""/>
                        </div>
                        <div className="unique-card-back">
                        <div className="unique-img">
                            <img src={uniqueImg2} alt=""/>
                        </div>
                        <div className="unique-content">
                          <h6>Markuz Fluid Art</h6>
                          <div className="row align-items-center">
                          <div className="col-6">
                              <div className="unique-info">
                              <img src={icon1} alt=""/>
                              <p>0.078WRD</p>
                              </div>
                          </div>
                          <div className="col-6 text-right">
                              <div className="unique-info">
                              <img src={basicInfo} alt=""/>
                              <p>Basic</p>
                              </div>
                          </div>
                          </div>
                          <div className="name">By Indra Rakelna Mainly Super lon</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                    <div className="unique-card active">
                    <div className="unique-card-inner">
                        <div className="unique-card-front">
                        <img src={legendary} alt=""/>
                        </div>
                        <div className="unique-card-back">
                        <div className="unique-img">
                            <img src={uniqueImg3} alt=""/>
                        </div>
                        <div className="unique-content">
                            <h6>Markuz Fluid Art</h6>
                            <div className="row align-items-center">
                            <div className="col-6">
                                <div className="unique-info">
                                <img src={icon1} alt=""/>
                                <p>0.078WRD</p>
                                </div>
                            </div>
                            <div className="col-6 text-right">
                                <div className="unique-info">
                                <img src={legendaryInfo} alt=""/>
                                <p>Legendary</p>
                                </div>
                            </div>
                            </div>
                            <div className="name">By Indra Rakelna</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="item">
                    <div className="unique-card active">
                    <div className="unique-card-inner">
                        <div className="unique-card-front">
                        <img src={basic} alt=""/>
                        </div>
                        <div className="unique-card-back">
                        <div className="unique-img">
                            <img src={uniqueImg} alt=""/>
                        </div>
                        <div className="unique-content">
                            <h6>Markuz Fluid Art</h6>
                            <div className="row align-items-center">
                            <div className="col-6">
                                <div className="unique-info">
                                <img src={icon1} alt=""/>
                                <p>0.078WRD</p>
                                </div>
                            </div>
                            <div className="col-6 text-right">
                                <div className="unique-info">
                                <img src={legendaryInfo} alt=""/>
                                <p>Legendary</p>
                                </div>
                            </div>
                            </div>
                            <div className="name">By Indra Rakelna</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </Slider>
            </div>
          </section>
        
      );
    }
  }