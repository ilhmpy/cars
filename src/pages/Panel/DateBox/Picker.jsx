import React from 'react';
import { DateTimePicker } from '@material-ui/pickers';

const Picker = ({ label, state, setState }) => {
  return (
      <DateTimePicker
        inputVariant='outlined'
        margin='normal'
        ampm={false}
        format={'dd.MM.yyyy HH:mm'}
        label={label}
        value={state}
        onChange={setState}
        cancelLabel='Отмена'
        okLabel='Сохранить'
      />
  );
};

export { Picker };