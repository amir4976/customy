"use client";

import React, { ReactNode, useState } from "react";

interface PaginationProps<T> {
  data: T[]; // کل داده‌ها
  itemsPerPage: number; // تعداد آیتم‌ها در هر صفحه
  children: (data: T[]) => ReactNode; // تابعی برای رندر کردن داده‌های صفحه فعلی
}

const Pagination = <T,>({ data, itemsPerPage, children }: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  // محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // داده‌های مربوط به صفحه فعلی
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="col-span-3" >
      {/* رندر داده‌های صفحه فعلی */}
      {children(currentData)}

      {/* کنترل‌های صفحه‌بندی */}
      <div className="flex justify-center gap-2 mt-4">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          )
        )}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
