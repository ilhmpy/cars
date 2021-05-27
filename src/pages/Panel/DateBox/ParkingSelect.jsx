import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ParkingSelect = ({ items, state, setState }) => {
  const classes = useStyles();
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = ({ target: { value } }) => setState(value);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
        Парковка
      </InputLabel>
      <Select
        value={state}
        onChange={handleChange}
        input={<OutlinedInput labelWidth={labelWidth} name="age" id="outlined-age-simple" />}
      >
        {items && items.length && items.map((i) => {
          return (
            <MenuItem key={i} value={i}>{i}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export { ParkingSelect };