import { Component } from "react";

import photo from '../assets/images/my-photo@2x.webp';
import telegramIcon from '../assets/images/telegram-icon.svg';
import instagramIcon from '../assets/images/instagram-icon.svg';

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
      <section className="team" id="team">
        <div className="container">
          <h2>Автор</h2>
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center"> 
                <div className="offset-xl-3 col-lg-6 col-xl-4 order-2 order-lg-1">
                  <div className="team-item large">
                    <div className="name">{name}</div>
                    <div className="post">{post}</div>
                    <p>{aboutUser}</p>
                    <ul className="social mt-30">
                    {social.map((item, index) => (
                      <li key={'social_'+index}>
                          <a rel="noreferrer" href={item.link} target="_blank">
                            <img src={item.icon} alt={item.link} />
                          </a>
                        </li>
                    ))}
                    </ul>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
                  <div className="team-item large">
                    <div className="img">
                      <img src={photo} alt={name} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Author;
