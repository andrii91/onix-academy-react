import { Component } from 'react';
import PropTypes from 'prop-types';

class MenuView extends Component {
  render() {
    const { menu } = this.props;
    return (
      <ul className="menu">
        {menu.map((item) => (
          <li key={item.id}><a href={item.link}>{item.title}</a></li>
        ))}
      </ul>
    ); 
  }
}

export default MenuView;

MenuView.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
};

MenuView.defaultProps = {
  menu: null
};
