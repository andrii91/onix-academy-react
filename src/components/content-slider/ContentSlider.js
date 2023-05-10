import { Component } from 'react';
import Slider from 'react-slick';
import ContentSliderItem from './ContentSliderItem';

import basic from '../../assets/images/basic.svg';
import rareInfo from '../../assets/images/rare-info.svg';
import basicInfo from '../../assets/images/basic-info.svg';
import legendary from '../../assets/images/legendary.svg';
import legendaryInfo from '../../assets/images/legendary-info.svg';
import rare from '../../assets/images/rare.svg';

import uniqueImg from '../../assets/images/img726.webp';
import uniqueImg2 from '../../assets/images/img727.webp';
import uniqueImg3 from '../../assets/images/img728.webp';

export default class ContentSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          imageFront: basic,
          uniqueImg,
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
          uniqueImg,
          title: 'Markuz Fluid Art',
          wrd: '1.0',
          icon: legendaryInfo,
          iconText: 'Legendary',
          author: 'By Indra Rakelna'
        }
      ]
    };
  }

  render() {
    const { slides } = this.state;

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
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Slider {...settings} className="unique-slider">  
            {slides.map((item, index) => (
              <ContentSliderItem item={item} index={index} key={`slidr-icon-${item}`} />
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
