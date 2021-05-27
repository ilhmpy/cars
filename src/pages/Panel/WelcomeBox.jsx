import React from 'react';

const WelcomeBox = ({ firstname, patronymic }) => {
  return (
    <section className='welcome-box'>
      <span>Добро пожаловать, </span>
      <span>{`${firstname} ${patronymic}!`}</span>
    </section>
  );
};

export { WelcomeBox };