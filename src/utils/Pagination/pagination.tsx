import { Pagination, PaginationProps } from "antd";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import { TPagination } from "../../types/pagination.type";
import "../../styles/pagination.css";

const itemRender: PaginationProps["itemRender"] = (
  _,
  type,
  originalElement
) => {
  if (type === "prev") {
    return (
      <a className="flex items-center !gap-1">
        <TiArrowLeft className="text-xl" />
        Previous
      </a>
    );
  }
  if (type === "next") {
    return (
      <a className="flex items-center !gap-1">
        Next
        <TiArrowRight className="text-xl" />
      </a>
    );
  }
  return originalElement;
};

const LabonePagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
}: TPagination) => {
  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    console.log(typeof pageNumber);
    setCurrentPage(pageNumber);
  };
  return (
    <div className="flex items-center justify-center mt-7 md:mt-10">
      <Pagination
        total={totalItems}
        defaultCurrent={1}
        pageSize={itemsPerPage}
        itemRender={itemRender}
        onChange={onChange}
        showLessItems={true}
        showSizeChanger={false}
      />
    </div>
  );
};

export default LabonePagination;
