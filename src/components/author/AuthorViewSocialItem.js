import { Component } from 'react';
import PropTypes from 'prop-types';

class AuthorViewSocialItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <li>
        <a rel="noreferrer" href={item.link} target="_blank">
          <img src={item.icon} alt={item.link} />
        </a>
      </li>
    );
  }
}

export default AuthorViewSocialItem;

AuthorViewSocialItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }),
};

AuthorViewSocialItem.defaultProps = {
  item: null
};
