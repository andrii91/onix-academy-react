import { Component } from 'react';
import PropTypes from 'prop-types';
import AuthorViewSocialItem from './AuthorViewSocialItem';

class AuthorViewSocial extends Component {
  render() {
    const { social } = this.props;

    return (
      <ul className="social mt-30">
        {social.map((item) => (
          <AuthorViewSocialItem item={item} key={`social_${item.link}`} />
        ))}
      </ul>
    );
  }
}

export default AuthorViewSocial;

AuthorViewSocial.propTypes = {
  social: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })),
};

AuthorViewSocial.defaultProps = {
  social: null
};
