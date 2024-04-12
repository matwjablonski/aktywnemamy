import { FC, PropsWithChildren } from 'react';

export const TableRow: FC<PropsWithChildren> = ({ children }) => (
  <tr className="odd:bg-white">{children}</tr>
)

export const Cell: FC<PropsWithChildren> = ({ children }) => (
  <td className="py-3 px-4">{children}</td>
);

export const HeaderCell: FC<PropsWithChildren> = ({ children }) => (
  <th className="py-3 px-4">{children}</th>
);
