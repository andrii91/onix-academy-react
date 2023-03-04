import { Component } from "react";

import heroImg2x from '../assets/images/hero-img@2x.png';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectPhoto: heroImg2x,
      projectInfo: 'Onix Academy "React hard level"',
      title: 'REACT TEST TASK 2022',
      lessTitle: 'Задание:',
      lessListHtml: [
        'Установить git, node, npm. Создать аккаунт на https://github.com/ и публичный репозиторий для проекта. Клонировать из репозитория проект, сделать любые изменения в нем, закоммитить и запушить изменения.',
        'Создать простой шаблон страницы для дальнейшей работы. Страница должна содержать хедер, футер, блок с коротким описанием проекта. На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ссылка на оригинал дизайна.',
        'Страница должна максимально точно повторять выбранный дизайн.',
        'Страница должна проходить валидацию на w3c.',
        'Опубликовать страницу с помощью Github Pages. Добавить файл README.md если его нет, и вставить в него ссылку на страницу Github Pages:'
      ],
    }
  }

  render() {
    const {projectPhoto, projectInfo, title, lessTitle, lessListHtml} = this.state;
    return (
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 hero-item">
              <h5>{projectInfo}</h5>
              <h1>{title}</h1>
              <h2>{lessTitle}</h2>
              <ul className="tokens-list">
                {lessListHtml.map((item, index) => (
                  <li key={'ul-list-'+index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-xl-5">
              <div className="hero-img">
                <img src={projectPhoto}  alt={title} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;
