/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Button,
  Divider,
  Image,
  Input,
  Popconfirm,
  Table,
  TableColumnsType,
} from "antd";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { TGallery } from "../../types/gallery.type";
import UpdateGallery from "./UpdateGallery";
import LabonePagination from "../../utils/Pagination/pagination";
import { IoSearchOutline } from "react-icons/io5";
import {
  useDeleteGalleryMutation,
  useGetAllGalleryQuery,
} from "../../redux/features/gallery/galleryApi";
import { TQueryParam } from "../../types/global.type";
import { toast } from "sonner";

const AllGalleryList = () => {
  const [params, setParams] = useState<TQueryParam[]>([
    { name: "limit", value: 10 },
  ]);

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [galleryData, setGalleryData] = useState<TGallery>({} as TGallery);

  const { data, isLoading: isDataLoading } = useGetAllGalleryQuery(params);
  const [deleteGallery] = useDeleteGalleryMutation();

  const GalleryColumns: TableColumnsType<TGallery> = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      width: 300,
      render: (photo: string) => (
        <Image
          className="!w-12 !h-12 object-cover rounded-xl"
          src={photo}
          alt="LabOne Photo Gallery"
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      // width: 50,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 100,
      align: "center",
      fixed: "right",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button onClick={() => handleUpdateData(record)}>
            <FiEdit2 fontSize={16} />
          </Button>
          {/* <Button onClick={() => handleDelete(record._id)}>
            <AiFillDelete fontSize={16} />
          </Button> */}
          <Popconfirm
            title="Delete the gallery"
            description="Are you sure to delete this gallery?"
            placement="topRight"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              <AiFillDelete fontSize={16} />
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleUpdateData = (gallery: TGallery) => {
    setUpdateModalOpen(true);
    setGalleryData(gallery);
  };

  const handleDelete = async (id: string) => {
    await deleteGallery(id);
    toast.success("gallery Delete Successful");
  };

  const handlePaginationChange = (page: number) => {
    setParams((prevParams) => {
      const filteredParams = prevParams?.filter(
        (param) => param.name !== "page"
      );

      // Check if "limit" with value 10 exists
      const limitExists = prevParams.some(
        (param) => param.name === "limit" && param.value === 10
      );

      // Build the new params array
      const newParams = [...filteredParams, { name: "page", value: page }];

      // If "limit" with value 10 does not exist, add it
      if (!limitExists) {
        newParams.push({ name: "limit", value: 10 });
      }

      return newParams;
    });
  };

  const meta = data?.data?.meta;
  const result = data?.data?.result;

  return (
    <>
      <div className="flex items-center gap-5 md:gap-16 mb-5 md:mb-8">
        <div className="grow">
          {/* <h2 className="text-primary text-xl font-semibold">gallery list</h2> */}
          <Divider orientation="left" className="!my-0 !text-xl !text-primary">
            All Gallery list
          </Divider>
        </div>
        <div className="w-[250px]">
          <Input
            type="primary"
            prefix={<IoSearchOutline />}
            placeholder="Search"
            className="focus:placeholder:!text-primary"
            onChange={(e) =>
              setParams([
                { name: "searchTerm", value: e.target.value },
                { name: "limit", value: 10 },
              ])
            }
          />
        </div>
      </div>
      <Table
        columns={GalleryColumns}
        dataSource={result}
        // scroll={{ x: 1900 }}
        loading={isDataLoading}
        pagination={false}
      />
      <LabonePagination
        meta={meta}
        handlePaginationChange={handlePaginationChange}
      />
      <UpdateGallery
        updateModalOpen={updateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
        galleryData={galleryData}
      />
    </>
  );
};

export default AllGalleryList;
