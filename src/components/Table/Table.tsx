import { cn } from '@/utils';
import { Table as BaseTable, TableProps as BaseTableProps } from 'antd';
import { paginationClassName } from '../Pagination';

type TableProps<RecordType> = BaseTableProps<RecordType>;

/*
 * TODO: Pagination icon
 */
function Table<RecordType extends object>(props: TableProps<RecordType>) {
  return (
    <BaseTable<RecordType>
      {...props}
      className={cn(
        'rounded-lg border border-solid border-[#E4E4E7] bg-white',
        '[&_.ant-table-thead_.ant-table-cell]:bg-transparent',
        '[&_.ant-table-thead_.ant-table-cell]:uppercase',
        '[&_.ant-table-thead_.ant-table-cell]:font-medium',
        '[&_.ant-table-thead_.ant-table-cell]:text-[#B5B5C3]',
        props.className,
      )}
      pagination={{
        className: cn(
          paginationClassName,
          'px-4',
          typeof props.pagination === 'object'
            ? props.pagination.className
            : null,
        ),
        ...props.pagination,
      }}
    />
  );
}

Table.SELECTION_COLUMN = BaseTable.SELECTION_COLUMN;
Table.EXPAND_COLUMN = BaseTable.EXPAND_COLUMN;
Table.SELECTION_ALL = BaseTable.SELECTION_ALL;
Table.SELECTION_INVERT = BaseTable.SELECTION_INVERT;
Table.SELECTION_NONE = BaseTable.SELECTION_NONE;
Table.Column = BaseTable.Column;
Table.ColumnGroup = BaseTable.ColumnGroup;
Table.Summary = BaseTable.Summary;

export { Table };
export type { TableProps };
