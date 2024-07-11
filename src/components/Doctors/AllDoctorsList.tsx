import { Button, Table, TableColumnsType } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { TDoctor } from "../../types/doctor.type";
import imageTest from "../../assets/image/labOneLogo.png";

const AllDoctorsList = () => {
  const doctorsColumns: TableColumnsType<TDoctor> = [
    {
      title: "Sort No",
      dataIndex: "serialNumber",
      key: "serialNumber",
      align: "center",
      width: 90,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      width: 170,
    },
    {
      title: "Contact Number",
      dataIndex: "contactNumber",
      key: "contactNumber",
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Specialty",
      dataIndex: "specialty",
      key: "specialty",
      width: 250,
    },
    {
      title: "Degree",
      dataIndex: "degree",
      key: "degree",
      width: 480,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 250,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 140,
      align: "center",
      fixed: "right",
      render: (_, record) => (
        <div className="flex justify-center gap-2">
          <Button onClick={() => handleEdit(record)}>
            <FiEdit2 fontSize={16} />
          </Button>
          <Button onClick={() => handleDelete(record._id)}>
            <AiFillDelete fontSize={16} />
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (record: TDoctor) => {
    // Handle edit action
    console.log("Edit", record);
  };

  const handleDelete = (id: string) => {
    // Handle delete action
    console.log("Delete", id);
  };

  const data = [
    {
      key: "1",
      _id: "1",
      fullName: "ডাঃ আরিফা আখতার",
      serialNumber: 1,
      contactNumber: 123456789,
      email: "john@example.com",
      department: "Gynaecology",
      specialty: "স্ত্রী রোগ, প্রসূতি বিদ্যা ও বন্ধ্যাত্ব বিশেষজ্ঞ ও সার্জন।",
      degree:
        "এমবিবিএস (ডিএমসি), বিসিএস (স্বাস্থ্য), এমসিপিএস, এফসিপিএস (গাইনি এন্ড অবস), এমআরসিওজি (লন্ডন,ইউকে), রিপ্রোডাক্টিভ এন্ডোক্রাইনোলজি এন্ড ইনফার্টিলিটি কোর্স (বিএসএমএমইউ) কনসালটেন্ট (গাইনি এন্ড অবস), ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা।",
      address: "মোজারমিল বাসস্ট্যান্ড, কাশিমপুর, গাজীপুর।",
      doctorImage: imageTest,
    },
    {
      key: "2",
      _id: "2",
      fullName: "ডাঃ রুখসানা পারভীন",
      serialNumber: 2,
      contactNumber: 123456789,
      email: "john@example.com",
      department: "Gynaecology",
      specialty: "স্ত্রী রোগ ও প্রসূতি বিদ্যা বিশেষজ্ঞ ও সার্জন।",
      degree:
        "এমবিবিএস, বিসিএস (স্বাস্থ্য), স্পেশাল ট্রেনিং ইন গাইনি অনকলোজী এমসিপিএস (গাইনি এন্ড অবস্), এফসিপিএস (গাইনি এন্ড অবস্)। আর এস, জাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট ও হাসপাতাল, মহাখালী, ঢাকা ।",
      address: "মোজারমিল বাসস্ট্যান্ড, কাশিমপুর, গাজীপুর।",
      doctorImage: imageTest,
    },
    {
      key: "3",
      _id: "3",
      fullName: "John Brown",
      serialNumber: 1,
      contactNumber: 123456789,
      email: "john@example.com",
      department: "Cardiology",
      specialty: "Cardiologist",
      degree: "MD",
      address: "123 Street, City",
      doctorImage: imageTest,
    },
  ];

  return (
    <>
      <Table
        columns={doctorsColumns}
        dataSource={data}
        scroll={{ x: 1900 }}
        pagination={false}
      />
    </>
  );
};

export default AllDoctorsList;
