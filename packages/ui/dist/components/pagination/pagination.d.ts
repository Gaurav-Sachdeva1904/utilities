import { default as React } from 'react';
export type PaginationProps = {
    className?: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};
declare function Pagination({ className, currentPage, totalPages, onPageChange }: PaginationProps): React.JSX.Element;
export default Pagination;
