import React, { useState, useTransition } from 'react';
import axios from 'axios';
import { ButtonComponent, InputComponent } from '../../components';

const wrapStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const controlsStyles = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  width: '400px',
};
const dataStyles = {
  overflow: 'auto',
  maxHeight: '73vh',
  width: '100%',
  border: '1px solid #DAA520',
  borderRadius: '8px',
  padding: '0.5rem',
  marginTop: '0.7rem',
};

export const Testing = () => {
  const [value, setValue] = useState<string>('');
  const [filteredValue, setFilteredValue] = useState<string>('');
  const [items, setItems] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  const getFakeTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res: any) => {
        setItems(res.data);
      });
  };

  const filtered = items.filter((item) => item.title.toLowerCase().includes(filteredValue));

  const onChangeValue = (e: any) => {
    setValue(e);
    startTransition(() => {
      setFilteredValue(e);
    });
  };

  return (
    <div style={wrapStyles as {}}>
      <div style={controlsStyles}>
        {isPending && <span>Loading...</span>}
        <InputComponent
          onChange={(e:
             { currentTarget: { value: any; };
             }) => onChangeValue(e.currentTarget.value)}
          label="Search title"
          value={value}
          disabled={!(items.length > 0)}
        />
        <ButtonComponent label="get fake data" onClick={getFakeTodos} />
      </div>
      {filtered.length > 0 ? (
        <div style={dataStyles}>
          {filtered.map((item) => (
            <div key={item.id}>
              <span>
                {item?.id}
                {' '}
              </span>
              <span>{item?.title}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
