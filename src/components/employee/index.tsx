import React, { useState, useEffect } from "react";

import { Table } from "antd";

import QueryForm from "./QueryForm";

import "./index.css";

import { EmployeeRequest, EmployeeResponse } from "../../interface/employee";

const employeeColumns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "部门",
    dataIndex: "department",
    key: "department",
  },
  {
    title: "入职时间",
    dataIndex: "hiredate",
    key: "hiredate",
  },
  {
    title: "职级",
    dataIndex: "level",
    key: "level",
  },
];

// class Employee extends Component {
//   render() {
//     return (
//       <>
//         <QueryForm />
//         <Table columns={employeeColumns} className="table" />
//       </>
//     );
//   }
// }

const Employee = () => {
  const [employee, setEmployee] = useState<EmployeeResponse>([])
  return (
    <>
      <QueryForm onDataChange={(employee:EmployeeResponse)=>setEmployee(employee)}/>
      <Table columns={employeeColumns} className="table" dataSource={employee} />
    </>
  )
}
export default Employee;