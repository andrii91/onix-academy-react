import { Component } from "react";
import logo from '../assets/images/logo.svg';
import burger from '../assets/images/burger-icon.svg';

class Header extends Component {
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
      ]
    }
  }

  render() {
    const { menu } = this.state;
    return (
      <nav className="nav fixed">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <a className="logo" href="/onix-academy-react/"><img src={logo} alt="logo" /></a>
              <div id="nav-btn"><img src={burger} alt="mob-btn" /></div>
            </div>
            <div className="col-lg-10 menu-container">
              <ul className="menu">
                {menu.map((item, index) => (
                  <li key={'header-menu-'+index}><a href={item.link}>{item.title}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    ); 
  }
}

export default Header;
