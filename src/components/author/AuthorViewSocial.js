import { Component } from "react";
import AuthorViewSocialItem from "./AuthorViewSocialItem";

class AuthorViewSocial extends Component {

  render() {
    const {social} = this.props;

    return (
        <ul className="social mt-30">
            {social.map((item, index) => (
              <AuthorViewSocialItem item={item}  key={'social_'+index} />
            ))}
        </ul>
    );
  }
}

export default AuthorViewSocial;
