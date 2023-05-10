import { Component } from 'react';
import HeroView from './HeroView';

import heroImg2x from '../../assets/images/hero-img@2x.png';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectPhoto: heroImg2x,
      projectInfo: 'Onix Academy "React hard level"',
      title: 'REACT TEST TASK 2022',
      lessTitle: 'Задание:',
      lessList: [
        'Установить git, node, npm. Создать аккаунт на https://github.com/ и публичный репозиторий для проекта. Клонировать из репозитория проект, сделать любые изменения в нем, закоммитить и запушить изменения.',
        'Создать простой шаблон страницы для дальнейшей работы. Страница должна содержать хедер, футер, блок с коротким описанием проекта. На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ссылка на оригинал дизайна.',
        'Страница должна максимально точно повторять выбранный дизайн.',
        'Страница должна проходить валидацию на w3c.',
        'Опубликовать страницу с помощью Github Pages. Добавить файл README.md если его нет, и вставить в него ссылку на страницу Github Pages:'
      ],
    };
  }

  render() {
    const {
      projectPhoto, projectInfo, title, lessTitle, lessList 
    } = this.state;
    return (
      <HeroView 
        projectPhoto={projectPhoto} 
        projectInfo={projectInfo}
        title={title}
        lessTitle={lessTitle}
        lessList={lessList}
      />
    );
  }
}

export default Hero;
