import heroImg2x from '../assets/images/hero-img@2x.png';

function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 hero-item">
            <h5>Onix Academy "React hard level"</h5>
            <h1>REACT TEST TASK 2022</h1>
            <h2>Задание: </h2>
            <ul className="tokens-list">
              <li>Установить git, node, npm. Создать аккаунт на <a href="https://github.com/" target="_blank"  rel="noreferrer">https://github.com/</a> и публичный репозиторий для проекта. Клонировать из репозитория проект, сделать любые изменения в нем, закоммитить и запушить изменения.</li>
              <li>Создать простой шаблон страницы для дальнейшей работы. Страница должна содержать хедер, футер, блок с коротким описанием проекта. На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ссылка на оригинал дизайна.</li>
              <li>Страница должна максимально точно повторять выбранный дизайн.</li>
              <li>Страница должна проходить валидацию на w3c.</li>
              <li>Опубликовать страницу с помощью Github Pages. Добавить файл README.md если его нет, и вставить в него ссылку на страницу Github Pages:</li>
            </ul>
          </div>
          <div className="col-xl-5">
            <div className="hero-img">
              <img src={heroImg2x}  alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
