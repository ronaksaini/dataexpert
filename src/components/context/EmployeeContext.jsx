import { createContext, useContext, useState } from 'react';

// Create the context
const EmployeeContext = createContext();

// Create a provider component
export const EmployeeProvider = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = (employeeData) => {
    setEmployeeList((prevList) => [...prevList, employeeData]);
  };
  const deleteEmployee = (index) => {
    const updatedList = [...employeeList];
    updatedList.splice(index, 1);
    setEmployeeList(updatedList);
  };

  return (
    <EmployeeContext.Provider value={{ employeeList, addEmployee, deleteEmployee}}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Custom hook for using the context
export const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};
