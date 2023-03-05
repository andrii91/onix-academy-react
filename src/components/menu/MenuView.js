import { Component } from "react";

class MenuView extends Component {

  render() {
    const { menu } = this.props;
    return (
        <ul className="menu">
          {menu.map((item, index) => (
              <li key={'header-menu-'+index}><a href={item.link}>{item.title}</a></li>
          ))}
        </ul>
    ); 
  }
}

export default MenuView;
