export interface EmployeeRequest {
  name: string;
  departmentId: number | undefined;
}

// 单条数据
interface EmployeeInfo {
  id: number;
  key: number;
  name: string;
  department: string;
  hiredate: string;
  level: string;
}

export type EmployeeResponse = EmployeeInfo[] | [];
