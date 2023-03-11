import { Component } from "react";
import AuthorViewSocial from "./AuthorViewSocial";

class AuthorView extends Component {

  render() {
    const {photo, name, post, about, social} = this.props;

    return (
      <section className="team" id="team">
      <div className="container">
        <h2>Автор</h2>
        <div className="row align-items-center"> 
          <div className="offset-xl-3 col-lg-6 col-xl-4 order-2 order-lg-1">
            <div className="team-item large">
              <div className="name">{name}</div>
              <div className="post">{post}</div>
              <p>{about}</p>
              <AuthorViewSocial social={social} />
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
      </section>
    );
  }
}

export default AuthorView;
