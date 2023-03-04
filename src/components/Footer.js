import { Component } from "react";

import logo from '../assets/images/logo.svg';
import telegramIcon from '../assets/images/telegram-icon.svg';
import instagramIcon from '../assets/images/instagram-icon.svg';
import orangeLogo from '../assets/images/orange-logo.svg';


class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [
        {
          link: "https://github.com/andrii91",
          title: "GitHub"
        },
        {
          link: "https://github.com/andrii91/onix-academy-react",
          title: "Sourse project"
        },
        {
          link: "https://www.figma.com/file/CRgVSBheXU8Q2nQQTlMckS/PicWord-design-exemple?node-id=0%3A1&t=VLgvWl5mLKQc26L1-1",
          title: "Figma project"
        },
        {
          link: "https://www.linkedin.com/in/andrii-lytvyn-40803b116/",
          title: "LinkedIn"
        }
      ],
      social: [
        {
          icon: telegramIcon,
          link: 'https://t.me/lytvyn_andrii',
        },
        {
          icon: instagramIcon,
          link: 'https://www.instagram.com/lytvyn__andriy/',
        }
      ]
    }
  }

  render() {
    const {menu, social} = this.state;
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <a className="logo" href="/"><img src={logo} alt="logo" /></a>
              <ul className="social">
                {social.map((item, index) => (
                  <li key={'social-footer-'+index}>
                    <a rel="noreferrer" href={item.link} target="_blank">
                      <img src={item.icon} alt={'icon'+index} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="menu">
                {menu.map((item, index) => (
                  <li key={'footer-menu-'+index}><a href={item.link}>{item.title}</a></li>
                ))}
              </ul>
              
              <a href="/#" className="orange-logo" target="_blank" >
                <img src={orangeLogo} alt="orange-logo" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
