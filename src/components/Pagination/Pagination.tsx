import { cn } from '@/utils';
import {
  Pagination as BasePagination,
  PaginationProps as BasePaginationProps,
} from 'antd';

const paginationClassName = cn(
  '[&_.ant-pagination-item-link]:!text-[#344054]',
  '[&_.ant-pagination-item-link]:!border-[#D0D5DD]',
  '[&_.ant-pagination-item-link]:!shadow-sm',
  '[&_.ant-pagination-item-link-icon]:!text-[#B5B5C3]',
);

type PagiantionProps = BasePaginationProps;

function Pagination(props: BasePaginationProps) {
  const { className, ...rest } = props;
  return (
    <BasePagination className={cn(paginationClassName, className)} {...rest} />
  );
}

export { Pagination, paginationClassName };
export type { PagiantionProps };
