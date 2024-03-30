import React from 'react';
import { useEmployeeContext } from '../context/EmployeeContext';
import './FormData.css'
import * as XLSX from 'xlsx';
import { useNavigate } from 'react-router-dom';
import { FaTrashCan } from "react-icons/fa6";

const FormData = () => {
  const { employeeList, deleteEmployee } = useEmployeeContext();
  const navigate = useNavigate();
  const exportToExcel = () => {
    const dataForExport = employeeList.map((employee) => ({
      EmployeeName: employee.employeeName,
      EmployeeId: employee.employeeId,
      JobTitle: employee.jobTitle,
      Department: employee.department,
      BaseSalary: employee.baseSalary,
      OvertimePay: employee.overtimePay,
      Deductions: employee.deductions,
      OtherAllowances: employee.otherAllowances,
      NetSalary: +employee.baseSalary + +employee.overtimePay - +employee.deductions + +employee.otherAllowances,
      UpiId: employee.upiId,
    }));
  
    const worksheet = XLSX.utils.json_to_sheet(dataForExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'EmployeeList');
    XLSX.writeFile(workbook, 'employee_list.xlsx');
  };
  return (
    <div className='formdata'>
      <div className="formdata-container">
      <div className="title-row">
      <h2>Employee List</h2>
      <div className='data-btn-container'>
      <button className="submit"onClick={()=>navigate('/add-employee')}>Add +</button>
      <button className="submit" onClick={exportToExcel}>Export to Excel</button>
      </div>
      </div>
      <table>
        <thead className='t-head'>
          <tr className='t-head-row'>
            <th className='name-head'>Name</th>
            <th className='id-head'>Employee ID</th>
            <th className='jobTitle-head'>Job Title</th>
            <th className='department-head'>Department</th>
            <th className='base-head'>Base Salary</th>
            <th className='base-head'>Overtime Pay</th>
            <th className='base-head'>Deductions</th>
            <th className='base-head'>Other</th>
            <th className='base-head'>Net salary</th>
            <th className='upi-head'>UPI Id</th>
            <th className='action-head'>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee, index) => (
            <tr key={index} className='data'>
              <td>{employee.employeeName}</td>
              <td>{employee.employeeId}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.department}</td>
              <td>{employee.baseSalary}</td>
              <td>{employee.overtimePay}</td>
              <td>{employee.deductions}</td>
              <td>{employee.otherAllowances}</td>
              <td>{+employee.baseSalary+ +employee.overtimePay-+employee.deductions+ +employee.otherAllowances}</td>
              <td>{employee.upiId}</td>
              <td><FaTrashCan className="delete-btn" onClick={()=>deleteEmployee(index)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default FormData;
