import React from 'react';

interface tableProps {
    result: any[],
    cells: any[],
    addThs: any[],
    customTd: (arg: string) => void,
}

export const TableComponent = (props: tableProps) => {
  const {
    cells, addThs = [], customTd, result = [],
  } = props;

  const cellMap = (
    cell: any,
    i: React.Key | null | undefined,
  ) => <th key={i}><span>{cell?.label}</span></th>;

  // eslint-disable-next-line no-shadow
  const onTableRow = (row: null, cells: any[]) => cells
    .map((cell: { name: string | number; }, iCell: React.Key | null | undefined) => {
      if (row !== null) {
        return (
          <td key={iCell}>
            {row[cell?.name] || []}
          </td>
        );
      }
    });

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {cells.map((th, i) => (
              cellMap(th, i)
            ))}
            {addThs.map((item) => item)}
          </tr>
        </thead>
        <tbody>
          {result.map((row, i) => (
            <tr key={i}>
              {onTableRow(row, cells)}
              {customTd(row)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
