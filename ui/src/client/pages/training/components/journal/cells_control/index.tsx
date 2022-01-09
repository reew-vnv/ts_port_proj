export const cellControl = ({ add }: any) => {
  const { handleDeleteRow } = add;
  return [
    {
      Header: 'DATE',
      columns: [
        { Header: '', accessor: 'date' },
      ],
    },
    {
      Header: 'PUSH UPS',
      columns: [
        { Header: 'Set 1', accessor: 'first_push_up_att' },
        { Header: 'Set 2', accessor: 'second_push_up_att' },
        { Header: 'Set 3', accessor: 'third_push_up_att' },
        { Header: 'Set 4', accessor: 'fourth_push_up_att' },
      ],
    },
    {
      Header: 'SQUATS',
      columns: [
        { Header: 'Set 1', accessor: 'first_squats_att' },
        { Header: 'Set 2', accessor: 'second_squats_att' },
        { Header: 'Set 3', accessor: 'third_squats_att' },
        { Header: 'Set 4', accessor: 'fourth_squats_att' },
      ],
    },
    {
      Header: 'PLANK',
      columns: [
        { Header: 'Set', accessor: 'first_plank_att' },
      ],
    },
    {
      Header: '',
      accessor: 'func',
      Cell: ((cell: any) => (
        // eslint-disable-next-line react/react-in-jsx-scope
        <span className="cell-controls" onClick={() => handleDeleteRow(cell)}>Delete</span>
      )),
    },
  ];
};
