import React from 'react';
import DepartmentsList from '../../components/Departments/DepartmentsList';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';

const AllDepartments = () => {
    return (
        <>
        <section className="flex justify-between">
          <div className="text-base flex items-center gap-2 md:gap-3">
            <Link to="/" className="text-primary">
              Lab One
            </Link>
            <span>/</span>
            <span>All Departments</span>
          </div>
        </section>
        <section className="bg-white/40 bg-blend-color-burn border p-5 my-5 rounded-xl w-full ">
          <div className="">
            {/* <h2 className="text-primary text-xl font-semibold">Doctor list</h2> */}
            <Divider orientation="left" className="!mt-0">
             All Departments list
            </Divider>
          </div>
          <div className="mt-8 md:mt-10">
            <DepartmentsList />
          </div>
        </section>
      </>
    );
};

export default AllDepartments;