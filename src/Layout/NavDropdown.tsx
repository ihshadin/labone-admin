import { Dropdown, Image, MenuProps } from "antd";
import { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavDropDown = () => {

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);
  const navigate = useNavigate();

  const handleDropdownVisibleChange = (visible: any) => {
    setDropdownVisible(visible);
  };

  const handelLogOut = async () => {
    localStorage.removeItem("accessToken");
    navigate('/login')
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="p-2 flex items-center !w-[235px]">
          <Image
            src="https://i.ibb.co/CtjVFXW/jahid-prof.jpg"
            width={40}
            height={40}
            alt="Profile"
            className="w-[40px] h-[40px] object-cover rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-sm text-primary font-semibold">
              {/* {data?.firstName + " " + data?.lastName} */}
              LabOne
            </h2>
            <p className="text-sm whitespace-normal text-wrap break-words !w-[145px]">
              {/* {data?.email} */}
              labone@gmail.com
            </p>
          </div>
        </div>
      ),
      key: "profile",
    },
    {
      type: "divider",
    },
    {
      label: (
        <h2
          onClick={() => handelLogOut()}
          className="p-2 flex items-center gap-2 text-base text-secondary !w-[235px]"
        >
          <FiLogOut className="text-secondary pt-[1px] w-[1.1rem] h-[1.1rem]" />{" "}
          Logout
        </h2>
      ),
      key: "logout",
    },
  ];

  if (isLoading) return null;

  return (
    <Dropdown
      open={dropdownVisible}
      onOpenChange={handleDropdownVisibleChange}
      menu={{ items }}
      trigger={["click"]}
    >
      <a className="" onClick={(e) => e.preventDefault()}>
        <div className="flex items-center justify-end">
          {/* <IoIosNotificationsOutline className="w-8 h-8 text-secondary" /> */}
          <Image
            src="https://i.ibb.co/CtjVFXW/jahid-prof.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="w-[32px] h-[32px] object-cover rounded-full mr-4"
          />
          <h2 className="text-sm font-semibold text-primary mx-2">LabOne</h2>
          {dropdownVisible ? (
            <LiaAngleUpSolid className="w-4 h-4 text-secondary" />
          ) : (
            <LiaAngleDownSolid className="w-4 h-4 text-secondary" />
          )}
        </div>
      </a>
    </Dropdown>
  );
};

export default NavDropDown;
