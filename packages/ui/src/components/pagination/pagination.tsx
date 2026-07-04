import React from 'react';
import Button from '@components/button';

import '@components/pagination/pagination.scss';

export type PaginationProps = {
    className?: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

function Pagination({ className, currentPage, totalPages, onPageChange }: PaginationProps) {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    return (
        <div className={`pagination ${className || ''}`}>
            {currentPage === 1 ? null : (
                <Button
                    icon="chevronLeft"
                    quite
                    onClick={() => handlePageChange(currentPage - 1)}></Button>
            )}
            <span>
                Page {currentPage} of {totalPages}
            </span>
            {currentPage === totalPages ? null : (
                <Button
                    icon="chevronRight"
                    quite
                    onClick={() => handlePageChange(currentPage + 1)}></Button>
            )}
        </div>
    );
}

export default Pagination;
