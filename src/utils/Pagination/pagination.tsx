import { Pagination } from "antd";

import { TPagination } from "../../types/pagination.type";
import "../../styles/pagination.css";

const LabonePagination = ({ meta, handlePaginationChange }: TPagination) => {
  return (
    <div className="flex items-center justify-center mt-7 md:mt-10">
      <Pagination
        total={meta?.total}
        pageSize={meta?.limit}
        defaultCurrent={1}
        onChange={handlePaginationChange}
        showLessItems={true}
        showSizeChanger={false}
      />
    </div>
  );
};

export default LabonePagination;
