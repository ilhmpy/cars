import React from 'react';
import { PageContent } from '../../ui';

const About = () => {
  return (
    <PageContent>
      <section className='about'>
        <p className='about-welcome'>Привет! Добро пожаловать на сервис Парковки.БГТУ</p>
        Здесь Вы всегда можете узнать последнюю информацию о парковочном пространстве нашего университета, а именно – сколько осталось свободных мест на каждой парковке, на каких местах уже стоят машины и многое другое.
        <p>Регистрироваться при работе с сервисом не нужно.</p>
        <p>Всё просто!</p>

        <p className='about-devs'>Создано командой разработки AIst.</p>
      </section>
    </PageContent>
  );
};

export { About };