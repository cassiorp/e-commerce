import React, { useCallback, useEffect, useState } from 'react';
import currency from '../../utils/currency';
import TextField from '@mui/material/TextField';

const InputCurrency = ({ mask = 'currency', ...props }) => {
  const defaultCurrency = (defaultValue) => {
    if (!defaultValue) return '';
    let value = defaultValue;
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

    defaultValue = value;
    return defaultValue || '';
  };
  const [values, setValues] = useState(
    defaultCurrency(props?.defaultValue?.toString().replace('.', '')),
  );
  const handleKeyUp = useCallback(
    (e) => {
      currency(e);
    },
    [mask],
  );

  useEffect(() => {
    if (!props.defaultValue) return;
    setValues();
  }, [props.defaultValue]);
  return (
    <div className="input-group prefix">
      <TextField
        style={{
          marginTop: '50px',
        }}
        fullWidth
        id="filled-basic"
        type={'text'}
        label="Preço"
        name={'price'}
        variant="filled"
        {...props.register('price', { required: true })}
        onKeyUp={handleKeyUp}
        defaultValue={values || ''}
      />
    </div>
  );
};

export default InputCurrency;
