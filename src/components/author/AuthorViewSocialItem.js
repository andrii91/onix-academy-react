import { Component } from "react";

class AuthorViewSocialItem extends Component {

  render() {
    const {item} = this.props;

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
