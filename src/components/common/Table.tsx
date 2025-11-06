import { clsx } from 'clsx';
import type { TableColumn, TableProps } from 'types';

const Table = ({ columns, data = [], actions, onRowClick }: TableProps) => {
  const getDataValue = (row: any, column: TableColumn) => {
    if (column.rowFormatter) return column.rowFormatter(row);
    let value = row[column.key as string];
    if ((value === undefined || value === null || value === '') && !column.formatter)
      return '-';

    return column.formatter ? column.formatter(value) : value;
  };

  return (
    <div className='w-full'>
      <div className={`w-full overflow-y-hidden`}>
        <div className={`-my-2 relative `}>
          <div className='relative top-0 inline-block min-w-full py-2 align-middle'>
            <table className={`min-w-full relative`}>
              <tbody className='bg-white'>
                {Array.isArray(data) &&
                  data.map((row: any, rowIndex: number) => (
                    <tr
                      key={rowIndex}
                      onClick={() => onRowClick?.(row)}
                      className={`${'hover:bg-gray-lighter border-b-[0.5px] border-[#E0E0E0]'} ${
                        onRowClick ? 'cursor-pointer' : ''
                      }`}>
                      {columns.map((column: TableColumn, index: number) => (
                        <td
                          key={`${column.key}-${index}`}
                          className={clsx(
                            column.className ? column.className : '',
                            'whitespace-nowrap py-4 pl-4 pr-3 sm:pl-3   min-w-[170px] text-gray-600 text-sm'
                          )}>
                          <span className='break-normal break-words whitespace-normal font-medium'>
                            {getDataValue(row, column)}
                          </span>
                        </td>
                      ))}
                      {actions && (
                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm  sm:pr-3'>
                          {actions(row)}
                        </td>
                      )}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
