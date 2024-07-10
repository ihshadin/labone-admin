import { Table } from "antd";
import { Button, TableColumnsType } from "antd";
import { AiFillDelete } from "react-icons/ai";
import {FiEdit2 } from "react-icons/fi";



const AllDoctorsList = () => {
  const columns: TableColumnsType<any> = [
    {
      title: "SL",
      dataIndex: "sl",
      width: 50,
      align:"center",
    },
    {
      title: "Doctor Name",
      dataIndex: "doctorName",
      width: 170,
      fixed: "left",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Specialty",
      dataIndex: "specialty",
    },
    {
      title: "Degree",
      dataIndex: "degree",
      width: 480,
    },
    {
      title: "Schedule 1",
      dataIndex: "schedule1",
    },
    {
      title: "Schedule 2",
      dataIndex: "schedule2",
    },
    {
      title: "Action",
      dataIndex: "action",
      align:"center",
      render:()=> <div className="flex gap-2"><Button><FiEdit2 fontSize={15} /></Button><Button><AiFillDelete fontSize={15}/></Button></div>
    },
  ];
  
  const data = [
    {
      key: "1",
      sl: "01",
      doctorName: "ডাঃ আরিফা আখতার",
      address: "মোজারমিল বাসস্ট্যান্ড, কাশিমপুর, গাজীপুর।",
      department: "Gynaecology",
      specialty: "স্ত্রী রোগ, প্রসূতি বিদ্যা ও বন্ধ্যাত্ব বিশেষজ্ঞ ও সার্জন।",
      degree:
        "এমবিবিএস (ডিএমসি), বিসিএস (স্বাস্থ্য), এমসিপিএস, এফসিপিএস (গাইনি এন্ড অবস), এমআরসিওজি (লন্ডন,ইউকে), রিপ্রোডাক্টিভ এন্ডোক্রাইনোলজি এন্ড ইনফার্টিলিটি কোর্স (বিএসএমএমইউ) কনসালটেন্ট (গাইনি এন্ড অবস), ঢাকা মেডিকেল কলেজ হাসপাতাল, ঢাকা।",
      schedule1: "সোমবার বিকাল ৪ঃ৩০ - সন্ধ্যা ৭ঃ৩০",
      schedule2: "শুক্রবার সকাল ১০ঃ০০ - দুপুর ১ঃ০০",
    },
    {
      key: "2",
      sl: "02",
      doctorName: "ডাঃ রুখসানা পারভীন",
      address: "মোজারমিল বাসস্ট্যান্ড, কাশিমপুর, গাজীপুর।",
      department: "Gynaecology",
      specialty: "স্ত্রী রোগ ও প্রসূতি বিদ্যা বিশেষজ্ঞ ও সার্জন।",
      degree: "এমবিবিএস, বিসিএস (স্বাস্থ্য), স্পেশাল ট্রেনিং ইন গাইনি অনকলোজী এমসিপিএস (গাইনি এন্ড অবস্), এফসিপিএস (গাইনি এন্ড অবস্)। আর এস, জাতীয় ক্যান্সার গবেষণা ইনস্টিটিউট ও হাসপাতাল, মহাখালী, ঢাকা ।",
      schedule1: "প্রতি শুক্রবার বিকাল ৪ঃ০০ - সন্ধ্যা ৭ঃ৩০।",
      schedule2: "প্রতি রবিবার বিকাল ৪ঃ০০ - সন্ধ্যা ৭ঃ৩০ , প্রতি মঙ্গলবার বিকাল ৪ঃ০০ - সন্ধ্যা ৭ঃ৩০।",
    },
    
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 650 }}  />
    </div>
  );
};

export default AllDoctorsList;
