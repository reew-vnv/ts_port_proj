import React, { useState, useTransition } from 'react';
import axios from 'axios';
import { ButtonComponent, InputComponent } from '../../components';
import './style.scss';

const wrapStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const controlsStylesWrapper = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  width: '100%',
};
const controlsStyles = {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-around',
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
      .then((res: {data: []}) => {
        const data: any[] = [...res.data];
        data.reduce((acc, item) => {
          const ndata = { ...item };
          ndata.id += data.length;
          acc.push(ndata);
          return acc;
        }, data);
        setItems(data);
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
    <div className="testing-wrap-styles">
      <div className="testing-controls-wrap-styles">
        <div className="testing-controls">
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
        {isPending ? <span>Loading...</span> : <div />}
      </div>
      {filtered.length > 0 ? (
        <div className="testing-data-styles">
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
