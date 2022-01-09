import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../../../store';
import { TableComponent } from '../../../../components';
import { cellControl } from './cells_control';
import { deleteTraining, getTraining } from '../../actions';

export const Journal = () => {
  const { result } = useSelector((state: TStore) => state.trainingReducer);
  const dispatch = useDispatch();

  const handleDeleteRow = async (row: any) => {
    const id = row.cell.row.original.objId;
    await dispatch(deleteTraining(id));
    await dispatch(getTraining());
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
