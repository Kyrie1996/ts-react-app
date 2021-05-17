import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import { post } from "../../utils/request";
// type Name = string
interface addParam {
  name: string, 
  departmentId: number | undefined
}
const Add = () => {
  // const [employee, setEmployee] = useState<EmployeeResponse>([])
  const [name, setName] = useState('')
  const [departmentId, setDepartmentId] = useState<number|undefined>(undefined)
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setName(e.currentTarget.value)
  }
  const handleDepartmentChange = (value: number) => {
    setDepartmentId(value)
  }
  const addEmployee = (param: addParam) => {
    post('/api/users/add', param).then(response => {
      console.error(1, response)
    });
  };
  const handleAdd = () => {
    addEmployee({name, departmentId})
  }
  return (
    <>
      <Form>
        <Form.Item>
          <Input placeholder="姓名" style={{ width: 120 }} allowClear value={name} onChange={handleNameChange} />
        </Form.Item>
        <Form.Item>
          <Select placeholder="部门" style={{ width: 120 }} allowClear value={departmentId} onChange={handleDepartmentChange}>
            <Select.Option value={1}>技术部</Select.Option>
            <Select.Option value={2}>运营部</Select.Option>
            <Select.Option value={3}>市场部</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ marginLeft: 20}} onClick={handleAdd}>增加</Button>
        </Form.Item>
      </Form>
    </>
  )
}
export default Add;