import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../../../../store';
import { ConfirmComponent, TableComponent } from '../../../../components';
import { cellControl } from './cells_control';
import { deleteTraining, getTraining } from '../../actions';

export const Journal = () => {
  const { result } = useSelector((state: TStore) => state.trainingReducer);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [deleteCell, setDeleteCell] = useState('');
  const dispatch = useDispatch();

  const handleOpenConfirm = (cell: any) => {
    setIsShowConfirm(true);
    setDeleteCell(cell.row.original.objId);
  };

  const handleDeleteRow = async () => {
    const id = deleteCell || '';
    await dispatch(deleteTraining(id));
    await dispatch(getTraining());
    setIsShowConfirm(false);
  };

  const add = {
    handleOpenConfirm,
  };

  const cells = cellControl({ add });

  if (!result.length) return null;
  return (
    <>
      <ConfirmComponent
        onConfirm={handleDeleteRow}
        onCancel={() => setIsShowConfirm(false)}
        open={isShowConfirm}
        content="Delete training?"
      />
      <TableComponent result={result} cells={cells} />
    </>
  );
};
