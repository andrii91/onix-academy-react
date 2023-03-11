import { Component } from "react";
import AuthorView from "./AuthorView";

import photo from '../../assets/images/my-photo@2x.webp';
import telegramIcon from '../../assets/images/telegram-icon.svg';
import instagramIcon from '../../assets/images/instagram-icon.svg';

class Author extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: photo,
      name: 'Литвин Андрій',
      post: 'Frontend',
      aboutUser: 'Хочу прокачати свої навички з Onix Academy',
      social: [
        {
          icon: telegramIcon,
          link: 'https://t.me/lytvyn_andrii'
        },
        {
          icon: instagramIcon,
          link: 'https://www.instagram.com/lytvyn__andriy/'
        }
      ]
    }
  }

  render() {
    const {photo, name, post, aboutUser, social} = this.state;
    return (
      <AuthorView photo={photo} name={name} post={post} about={aboutUser} social={social} />
    );
  }
}

export default Author;
