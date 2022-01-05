import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../../../../store';
import { TableComponent } from '../../../../components';
import { cellControl } from './cells_control';

export const Journal = () => {
  const { result } = useSelector((state: TStore) => state.trainingReducer);

  const handleDeleteRow = (row: any) => {
    console.log({ row });
  };

  const add = {
    handleDeleteRow,
  };

  const cells = cellControl({ add });

  if (!result.length) return null;
  return (
    <TableComponent result={result} cells={cells} />
  );
};
