import logo from '../assets/images/logo.svg';

function Header() {
  return (
      <nav className="nav fixed">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <a className="logo" href="/app/"><img src={logo} alt="" /></a>
                
                <div id="nav-btn"><svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="30" fill="#F6FF12"/><path d="M40.91 18H19.09c-.6 0-1.09.912-1.09 2.032s.49 2.031 1.09 2.031h21.82c.6 0 1.09-.912 1.09-2.031 0-1.12-.49-2.032-1.09-2.032ZM40.91 28.12H19.09c-.6 0-1.09.912-1.09 2.031 0 1.12.49 2.032 1.09 2.032h21.82c.6 0 1.09-.912 1.09-2.032s-.49-2.031-1.09-2.031ZM40.91 37.937H19.09c-.6 0-1.09.912-1.09 2.032S18.49 42 19.09 42h21.82c.6 0 1.09-.912 1.09-2.032s-.49-2.031-1.09-2.031Z" fill="#000"/></svg></div>
            </div>
            <div className="col-lg-10 menu-container">
              <ul className="menu">
                <li><a href="https://github.com/andrii91">GitHub</a></li>
                <li><a href="https://github.com/andrii91/onix-academy-react" >Sourse project</a></li>
                <li><a href="https://www.figma.com/file/CRgVSBheXU8Q2nQQTlMckS/PicWord-design-exemple?node-id=0%3A1&t=VLgvWl5mLKQc26L1-1">Figma project</a></li>
                <li><a href="https://www.linkedin.com/in/andrii-lytvyn-40803b116/">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Header;
