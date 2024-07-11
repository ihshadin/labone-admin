import { Button, Table, TableColumnsType } from "antd";
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { TMachine } from "../../types/machine.type";



const AllMachinesList = () => {
    const machinesColumns: TableColumnsType<TMachine> = [
        
        {
            title: "Machine Name",
            dataIndex: "machineName",
            key: "machineName",
            width: 150,
          },
          {
            title: "Machine Origin",
            dataIndex: "machineOrigin",
            key: "machineOrigin",
            width: 140,
            
          },
        {
          title: "Details",
          dataIndex: "details",
          key: "details",
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
    
      const handleEdit = (record: TMachine) => {
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
              machineName: "CT SCAN Machine",
              machineOrigin: "Hitachi-Japan",
              details: "Advanced imaging technology for detailed internal scans.",
            },
            {
              key: "2",
              _id: "2",
              machineName: "MRI Machine",
              machineOrigin: "Siemens-Germany",
              details: "Uses magnetic fields and radio waves to create detailed images of organs and tissues.",
            },
            {
              key: "3",
              _id: "3",
              machineName: "Ultrasound Machine",
              machineOrigin: "GE Healthcare-USA",
              details: "Utilizes high-frequency sound waves to capture live images from the inside of the body.",
            },
            {
              key: "4",
              _id: "4",
              machineName: "X-Ray Machine",
              machineOrigin: "Philips-Netherlands",
              details: "Employs X-rays to view the inside of the body, especially bones.",
            },
            {
              key: "5",
              _id: "5",
              machineName: "PET Scan Machine",
              machineOrigin: "Toshiba-Japan",
              details: "Combines nuclear medicine and biochemical analysis to produce images of the body's function.",
            },
          ];
          
    
      return (
        <>
          <Table
            columns={machinesColumns}
            dataSource={data}
            scroll={{ x: 900 }}
            pagination={false}
          />
        </>
      );
};

export default AllMachinesList;