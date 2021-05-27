import React, { useState } from 'react';
import { loadData, $statistics } from '../../../model/Panel';
import { useStore } from 'effector-react';
import DateFnsUtils from '@date-io/date-fns';
import ru from "date-fns/locale/ru";
import { addDays } from 'date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Picker } from './Picker';
import { ParkingSelect } from './ParkingSelect';
import { LoadButton } from './LoadButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormHelperText from '@material-ui/core/FormHelperText';

const today = () => new Date().setHours(0, 0, 0);
const tomorrow = () => addDays(today(), 1);

const DateBox = ({ ids }) => {
  
  const [from, setFrom] = useState(today());
  const [to, setTo] = useState(tomorrow());
  const [id, setId] = useState('');

  const { loading, error } = useStore($statistics);

  const onClick = () => {
    const timestampFrom = Math.floor(new Date(from).getTime() / 1000);
    const timestampTo = Math.floor(new Date(to).getTime() / 1000);
    loadData({ id, from: timestampFrom, to: timestampTo });
  };

  return (
    <section className='date-box'>
      <ParkingSelect 
        items={ids}
        state={id}
        setState={setId}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
        <Picker
          label={'Дата с'}
          state={from}
          setState={setFrom}
        />
        <Picker
          label={'Дата по'}
          state={to}
          setState={setTo}
        />
      </MuiPickersUtilsProvider>
      <FormHelperText error className='form-error-label'>
        {error}
      </FormHelperText>
      {loading ? <CircularProgress /> :  <LoadButton onClick={onClick} />}
    </section>
  );
};

export { DateBox };