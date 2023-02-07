import photo from '../assets/images/my-photo@2x.webp';

function Author() {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Автор</h2>
        <div className="row">
          <div className="col-12">
           <div className="row align-items-center"> 
             <div className="offset-xl-3 col-lg-6 col-xl-4 order-2 order-lg-1">
              <div className="team-item large">
                <div className="name">Литвин Андрій</div>
                <div className="post">Frontend</div>
                <p>Хочу прокачати свої навички з Onix Academy</p>
                <ul className="social mt-30">
                  <li><a rel="noreferrer" href="https://t.me/lytvyn_andrii" target="_blank"><svg viewBox="0 0 38 44" width="38" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m37.888 8.327-5.734 26.925c-.432 1.9-1.56 2.373-3.163 1.478l-8.737-6.41-4.216 4.036c-.466.465-.856.853-1.755.853l.627-8.859 16.193-14.569c.704-.625-.153-.97-1.095-.346L9.991 23.985 1.373 21.3c-1.875-.583-1.909-1.867.39-2.762L35.47 5.608c1.56-.583 2.926.346 2.417 2.72Z" fill="#fff"></path></svg></a></li>
                  <li><a rel="noreferrer" href="https://www.instagram.com/lytvyn__andriy/" target="_blank"><svg viewBox="0 0 39 44" width="39" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#c2)"><path d="M19.257 12.117a9.859 9.859 0 0 0-9.874 9.874 9.859 9.859 0 0 0 9.874 9.875 9.859 9.859 0 0 0 9.874-9.875 9.859 9.859 0 0 0-9.874-9.874Zm0 16.294c-3.532 0-6.42-2.88-6.42-6.42s2.88-6.42 6.42-6.42 6.42 2.88 6.42 6.42-2.888 6.42-6.42 6.42Zm12.581-16.698a2.298 2.298 0 0 1-2.303 2.303 2.303 2.303 0 1 1 2.303-2.303Zm6.54 2.338c-.146-3.085-.85-5.818-3.11-8.07-2.252-2.251-4.985-2.956-8.07-3.11-3.18-.181-12.71-.181-15.89 0-3.077.145-5.81.85-8.07 3.102-2.26 2.251-2.956 4.984-3.11 8.07-.18 3.179-.18 12.71 0 15.889.146 3.085.85 5.818 3.11 8.07 2.26 2.251 4.985 2.956 8.07 3.11 3.18.18 12.71.18 15.89 0 3.085-.146 5.818-.85 8.07-3.11 2.25-2.252 2.956-4.985 3.11-8.07.18-3.18.18-12.702 0-15.881ZM34.27 33.344a6.5 6.5 0 0 1-3.66 3.66c-2.536 1.006-8.551.774-11.353.774-2.801 0-8.826.224-11.352-.773a6.5 6.5 0 0 1-3.661-3.661c-1.006-2.536-.773-8.551-.773-11.353 0-2.801-.224-8.825.773-11.352a6.5 6.5 0 0 1 3.66-3.661c2.536-1.005 8.552-.773 11.353-.773 2.802 0 8.826-.224 11.353.773a6.5 6.5 0 0 1 3.66 3.661c1.006 2.535.774 8.55.774 11.352 0 2.802.232 8.826-.773 11.353Z" fill="#fff"></path></g><defs><clipPath id="c2"><path fill="#fff" d="M0 0h38.5v44H0z"></path></clipPath></defs></svg></a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 order-1 order-lg-2">
              <div className="team-item large">
                <div className="img">
                  <img src={photo} alt="" />
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

export default Author;
