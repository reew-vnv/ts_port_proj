export const cellControl = ({ add }: any) => {
  const { handleDeleteRow } = add;
  return [
    {
      Header: 'Дата',
      columns: [
        { Header: '', accessor: 'date' },
      ],
    },
    {
      Header: 'Отжимания',
      columns: [
        { Header: 'Подход 1', accessor: 'first_push_up_att' },
        { Header: 'Подход 2', accessor: 'second_push_up_att' },
        { Header: 'Подход 3', accessor: 'third_push_up_att' },
        { Header: 'Подход 4', accessor: 'fourth_push_up_att' },
      ],
    },
    {
      Header: 'Приседания',
      columns: [
        { Header: 'Подход 1', accessor: 'first_squats_att' },
        { Header: 'Подход 2', accessor: 'second_squats_att' },
        { Header: 'Подход 3', accessor: 'third_squats_att' },
        { Header: 'Подход 4', accessor: 'fourth_squats_att' },
      ],
    },
    {
      Header: 'Планка',
      columns: [
        { Header: 'Подход 1', accessor: 'first_plank_att' },
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
