import { cn } from '@/utils';
import {
  Table as BaseTable,
  TableProps as BaseTableProps,
  ConfigProvider,
  ThemeConfig,
} from 'antd';

type TableProps<RecordType> = BaseTableProps<RecordType>;

const customTheme: ThemeConfig = {
  components: {
    Pagination: {
      borderRadius: 8,
      colorBgContainer: '#2D5698',
      colorPrimary: '#FFF',
      colorPrimaryHover: '#FFF',
      colorText: '#B5B5C3',
    },
    Table: {
      colorBorder: '#E4E4E7',
      colorTextHeading: '#B5B5C3',
    },
  },
};

/*
 * TODO: Pagination icon
 */
function Table<RecordType extends object>(props: TableProps<RecordType>) {
  return (
    <ConfigProvider theme={customTheme}>
      <BaseTable<RecordType>
        {...props}
        className={cn(
          'rounded-lg border border-solid border-[#E4E4E7] bg-white px-4 pt-2',
          '[&_.ant-table-thead_.ant-table-cell]:bg-transparent',
          '[&_.ant-table-thead_.ant-table-cell]:uppercase',
          '[&_.ant-table-thead_.ant-table-cell]:text-[#B5B5C3]',
          props.className,
        )}
        pagination={{
          className: cn(
            '[&_.ant-pagination-item-link]:!text-[#344054]',
            '[&_.ant-pagination-item-link]:!border-[#D0D5DD]',
            '[&_.ant-pagination-item-link]:!shadow-sm',
            '[&_.ant-pagination-item-link-icon]:!text-[#B5B5C3]',
            typeof props.pagination === 'object'
              ? props.pagination.className
              : null,
          ),
          ...props.pagination,
        }}
      />
    </ConfigProvider>
  );
}

export { Table };
export type { TableProps };
