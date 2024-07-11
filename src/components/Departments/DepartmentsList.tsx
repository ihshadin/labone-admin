import { Button, Table, TableColumnsType } from "antd";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { TDepartment } from "../../types/department.type";


const DepartmentsList = () => {
    const departmentColumns: TableColumnsType<TDepartment> = [
        
        {
            title: "Icon",
            dataIndex: "icon",
            key: "icon",
            width: 80,
          },
          {
            title: "Department Name",
            dataIndex: "name",
            key: "name",
            width: 250,
            
            
          },
        {
          title: "Details",
          dataIndex: "details",
          key: "details",
          
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          width: 130,
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
    
      const handleEdit = (record: TDepartment) => {
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
          icon: "🩺",
          name: "Cardiology",
          details: "Department specializing in heart and blood vessel conditions.",
        },
        {
          key: "2",
          _id: "2",
          icon: "🧠",
          name: "Neurology",
          details: "Department focusing on disorders of the nervous system.",
        },
        {
          key: "3",
          _id: "3",
          icon: "👶",
          name: "Pediatrics",
          details: "Department dedicated to the medical care of infants, children, and adolescents.",
        },
        {
          key: "4",
          _id: "4",
          icon: "🦴",
          name: "Orthopedics",
          details: "Department dealing with the musculoskeletal system.",
        },
        {
          key: "5",
          _id: "5",
          icon: "🩹",
          name: "Dermatology",
          details: "Department specializing in skin, hair, and nail conditions.",
        },
      ];
      
          
    
      return (
        <>
          <Table
            columns={departmentColumns}
            dataSource={data}
            scroll={{ x: 900 }}
            pagination={false}
          />
        </>
      );
};

export default DepartmentsList;