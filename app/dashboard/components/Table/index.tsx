import Link from 'next/link';
import { Cell, HeaderCell, TableRow } from './ui';

type Cell = {
  Component: React.ElementType;
};

type TableProps<T = { [key: string]: string }> = {
  data: T[];
  cells?: Partial<Record<keyof T, Cell>>;
}

export const Table = function<T = { [key: string]: string }>({ data, cells }: TableProps<T>) {

  const handleDelete = async (id: number) => {
    fetch(`/api/events/${id}`, {
      method: 'DELETE',
    });
  }

  const prepareCell = (row: Record<string, string>, key: string) => {
    if (cells && key in cells) {
      const Cells = cells as Record<string, Cell>;
      const Component = Cells[key].Component;
      const props = {
        [key]: row[key],
      }
      return <Component key={key} {...props}>{row[key]}</Component>;
    }

    return row[key];
  }

  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <HeaderCell key={key}>{key}</HeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, i: number) => (
          <TableRow key={i}>
            {Object.keys(row).map((key) => (
              <Cell key={key}>{prepareCell(row, key)}</Cell>
            ))}
            <Cell>
              <Link href={`/dashboard/events/${row.id}`}>szczegóły</Link>
              <button>edit</button>
              <button onClick={() => handleDelete(row.id)}>delete</button>
            </Cell>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
};
