import logo from '../assets/images/logo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <a className="logo" href="/"><img src={logo} alt="" /></a>
            <ul className="social">
              <li><a rel="noreferrer" href="https://t.me/lytvyn_andrii" target="_blank"><svg viewBox="0 0 38 44" width="38" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m37.888 8.327-5.734 26.925c-.432 1.9-1.56 2.373-3.163 1.478l-8.737-6.41-4.216 4.036c-.466.465-.856.853-1.755.853l.627-8.859 16.193-14.569c.704-.625-.153-.97-1.095-.346L9.991 23.985 1.373 21.3c-1.875-.583-1.909-1.867.39-2.762L35.47 5.608c1.56-.583 2.926.346 2.417 2.72Z" fill="#fff"></path></svg></a></li>
              <li><a rel="noreferrer" href="https://www.instagram.com/lytvyn__andriy/" target="_blank"><svg viewBox="0 0 39 44" width="39" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#c)"><path d="M19.257 12.117a9.859 9.859 0 0 0-9.874 9.874 9.859 9.859 0 0 0 9.874 9.875 9.859 9.859 0 0 0 9.874-9.875 9.859 9.859 0 0 0-9.874-9.874Zm0 16.294c-3.532 0-6.42-2.88-6.42-6.42s2.88-6.42 6.42-6.42 6.42 2.88 6.42 6.42-2.888 6.42-6.42 6.42Zm12.581-16.698a2.298 2.298 0 0 1-2.303 2.303 2.303 2.303 0 1 1 2.303-2.303Zm6.54 2.338c-.146-3.085-.85-5.818-3.11-8.07-2.252-2.251-4.985-2.956-8.07-3.11-3.18-.181-12.71-.181-15.89 0-3.077.145-5.81.85-8.07 3.102-2.26 2.251-2.956 4.984-3.11 8.07-.18 3.179-.18 12.71 0 15.889.146 3.085.85 5.818 3.11 8.07 2.26 2.251 4.985 2.956 8.07 3.11 3.18.18 12.71.18 15.89 0 3.085-.146 5.818-.85 8.07-3.11 2.25-2.252 2.956-4.985 3.11-8.07.18-3.18.18-12.702 0-15.881ZM34.27 33.344a6.5 6.5 0 0 1-3.66 3.66c-2.536 1.006-8.551.774-11.353.774-2.801 0-8.826.224-11.352-.773a6.5 6.5 0 0 1-3.661-3.661c-1.006-2.536-.773-8.551-.773-11.353 0-2.801-.224-8.825.773-11.352a6.5 6.5 0 0 1 3.66-3.661c2.536-1.005 8.552-.773 11.353-.773 2.802 0 8.826-.224 11.353.773a6.5 6.5 0 0 1 3.66 3.661c1.006 2.535.774 8.55.774 11.352 0 2.802.232 8.826-.773 11.353Z" fill="#fff"></path></g><defs><clipPath id="c"><path fill="#fff" d="M0 0h38.5v44H0z"></path></clipPath></defs></svg></a></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul className="menu">
              <li><a rel="noreferrer" href="https://github.com/andrii91">GitHub</a></li>
              <li><a rel="noreferrer" href="https://github.com/andrii91/onix-academy-react" >Sourse project</a></li>
              <li><a rel="noreferrer" href="https://www.figma.com/file/CRgVSBheXU8Q2nQQTlMckS/PicWord-design-exemple?node-id=0%3A1&t=VLgvWl5mLKQc26L1-1">Figma project</a></li>
              <li><a rel="noreferrer" href="https://www.linkedin.com/in/andrii-lytvyn-40803b116/">LinkedIn</a></li>
            </ul>
            
            <a href="/#" className="orange-logo" target="_blank" ><svg width="135" height="80" viewBox="0 0 135 80"  fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#k)" fill="#fff"><path d="M119.946 5.534c.631-.163.036.712.914.644 2.406-.186 6.667-.91 7.124-1.553.623-.874-.599-4.482-2.141-4.62l-.07-.005-.068.014c-31.262 6.97-57.733 21.64-79.058 43.992 1.39-2.997 2.884-5.569 4.287-6.91l.125-.004.09-.219c.106-.145.211-.422.038-.816-.005-.01-.014-.022-.019-.033-.015-.04-.022-.077-.043-.118-.34-.698-1.151-1.203-1.91-1.535-.374-.188-.74-.323-1.04-.368a4.34 4.34 0 0 0-.182-.047c-.01-.003-.017.011-.021.03-.03 0-.064-.002-.091 0-.292.027-.534.186-.62.452-.021.064-.046.131-.068.195-.767.5-2.289 1.65-6.077 4.093l-.366.235c3.45-9.233 6.266-17.88 6.178-19.138-.289-4.087-4.325-7.837-6.507-7.704a1.586 1.586 0 0 0-.227.03c-2.123.445-4.016 1.828-5.705 3.124-2.814 2.158-5.355 4.667-7.785 7.244a113.817 113.817 0 0 0-4.934 5.62 146.471 146.471 0 0 0-2.708 3.37C9.851 43.368 4.402 53.311 3.586 56.796c-.053.376.03.709.237.96.32.393 5.578-1.195 5.74-2.338.045-.342 2.037-8.19 4.825-12.729.004-.004.005-.008.008-.012-1.653 4.593-3.139 9.538-4.157 14.281a200.407 200.407 0 0 1-9.77 4.797l-.043.018-.035.024c-.648.451-.32 1.525-.211 1.88.321 1.058.98 3.059 2.032 2.958.27-.024.814-.35 7.103-4.524-.847 6.041-.66 11.356 1.287 14.61 1.402 2.345 3.624 3.443 6.6 3.259.321-.02.653-.056.988-.105 1.484-.221 3.175-1.61 5.164-4.25 5.688-7.551 12.275-23.416 15.663-32.119l.27-.695c2.207-1.32 4.234-2.485 5.97-3.412-3.052 6.696-7.718 14.66-8.591 16.094l-.098.127.003.052c-.172.398-.21 1.042.357 2.015.715 1.232 2.529 3.028 3.63 2.925a.857.857 0 0 0 .66-.383l.055-.017.078-.238c7.619-23.41 45.385-45.822 78.595-54.44Zm-98.454 31.47c.572-1.204.656-1.389.682-1.54.052-.305-.047-.627-.29-.938-.285-.366-.806-.74-1.43-.919.246-.32.49-.635.735-.945a79.785 79.785 0 0 1 2.397-2.908c7.248-8.374 13.733-12.249 15.791-12.375.291-.017.408.043.444.07.909.674 1.965 3.31-1.2 13.431-1.14 3.64-2.733 7.892-4.6 12.343-5.784 3.6-12.651 7.715-19.689 11.549 1.477-4.773 3.78-10.618 7.16-17.768Zm5.068 22.1c-5.555 10.616-9.388 15.479-10.708 15.562a.281.281 0 0 1-.157-.026c-2.79-1.462-4.823-5.41-2.676-14.986 5.523-3.664 12.694-8.396 19.337-12.577a210.578 210.578 0 0 1-5.796 12.027Z"/><path d="M84.963 51.29a1.28 1.28 0 0 0 .516-.184c.335-.21 7.544-14.193 14.197-20.383l.152-.092.057-.232c.002-.005 0-.011.002-.016l.006-.009c.404-2.044-2.245-2.865-2.348-2.899l-.527.202c-.042.063-.185.246-.402.527-2.017 1.068-6.926 5.035-11.689 9.178 1.759-2.495 3.186-4.341 3.593-4.671.247-2.612-3.198-3.339-3.32-3.366l-.244.135a1.127 1.127 0 0 0-.514.202c-.65.463-8.185 6.22-13.712 11.184-2.143 1.924-5.155 4.546-7.658 6.77.288-.568.63-1.174 1.042-1.823 3.808-5.992 10.31-11.939 10.18-12.664-.127-.722-2.364-1.069-2.364-1.069l-.103.013c-.197.022-.466.06-2.47 2.401-.008-.001-.012-.003-.02-.006 0 0-2.274-.43-2.98-.411-.707.017-5.175 3.82-10.298 8.428-10.689 9.611-10.081 12.647-9.772 13.308.447.961 1.227 1.405 2.248 1.282l.001-.002c2.72-.327 7.513-5.329 11.677-10.01-1.024 1.793-1.751 3.425-1.859 4.574l-.001.024v.02c0 .254.08.508.214.755.381.908 1.782 2.707 3.542 2.495.121-.017.244-.042.363-.077l.153-.048.095-.132c2.313-3.225 9.223-10.294 15.761-15.653-3.3 4.764-6.807 9.696-7.496 10.683l-.054.073-.028.084c-.097.298-.123.785.304 1.411.716 1.04 2.446 2.092 3.789 1.931.284-.034.544-.12.776-.257l.186-.11.068-.22c.565-1.832 2.041-4.594 3.794-7.483 2.743-2.563 6.278-5.274 9.616-7.651-3.533 4.706-7.074 9.702-7.586 11.518l-.06.216.094.18c.55 1.012 2.115 1.987 3.08 1.873ZM113.551 27.703l.154-.12.026-.191a1.45 1.45 0 0 0-.383-1.193c-1.094-1.2-4.272-1.165-4.63-1.155h-.064l-.059.019c-1.284.373-17.18 18.584-18.62 22.574-.068.187-.276.76.01 1.163.647.914 2.953 1.061 4.052.853.496-.095.918-.282 1.198-.407.075-.035.171-.076.183-.08.186-.038.206-1.335 7.667-9.667-4.67 8.587-16.879 31.307-17.157 31.872-.43.87-3.087 3.311-3.276 4.467l-.046.283.217.173c.376.295 2.306 1.757 3.525 1.522a1.23 1.23 0 0 0 .228-.067c.437-.17 1.063-1.265 7.263-13.383 7.119-13.913 16.611-34.26 19.712-36.663ZM132.915 27.49c-3.398 2.572-21.194 16.625-21.842 16.25-.383-.23 1.223-3.645 1.653-4.095 3.057.348 14.989-14.495 15.019-15.104.035-.607-4.517-1.546-5.752-1.104-2.448.877-16.809 15.607-14.417 21.92.912 1.266 4.426 1.047 4.911.834 1.462-.641 15.114-10.967 21.249-15.948.409-.333 1.242-3.131-.821-2.753Z"/></g><defs><clipPath id="k"><path fill="#fff" d="M0 0h134.253v80H0z"/></clipPath></defs></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
