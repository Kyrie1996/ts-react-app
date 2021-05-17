import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { EmployeeRequest, EmployeeResponse } from "../../interface/employee";
import { get } from "../../utils/request";
import { GET_EMPLOYEE_URL } from "../../constants/urls";
import { FormProps } from "antd/lib/form";
import { Link} from 'react-router-dom'
const { Option } = Select;

// 定义属性类型
interface Props extends FormProps {
  onDataChange(data: EmployeeResponse | any): void;
}
const QueryForm = (props: Props) => {
  const [name, setName] = useState('')
  const [departmentId, setDepartmentId] = useState<number|undefined>(undefined)
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleDepartmentChange = (value: number) => {
    setDepartmentId(value);
  };
  const handleSubmit = () => {
    queryEmployee({name,departmentId});
  };
  const queryEmployee = (param: EmployeeRequest) => {
    get('/api/users/', param).then(response => {
      console.error(1, response)
      props.onDataChange(response);
    });
  };
  useEffect(() => {
    console.log(name, departmentId)
  })
  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="姓名" style={{ width: 120 }} allowClear value={name}
              onChange={handleNameChange} />
        </Form.Item>
        <Form.Item>
          <Select placeholder="部门" style={{ width: 120 }} allowClear value={departmentId} onChange={handleDepartmentChange}>
            <Option value={1}>技术部</Option>
            <Option value={2}>运营部</Option>
            <Option value={3}>市场部</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>查询</Button>
          <Button type="primary" style={{ marginLeft: 20}}><Link to='/add'>增加新员工</Link></Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default QueryForm;