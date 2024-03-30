import React, { useEffect, useState } from 'react'
import './Form.css'
import { useEmployeeContext } from '../context/EmployeeContext';
import { useNavigate } from 'react-router-dom';
import { RxCrossCircled } from "react-icons/rx";
import { FaCircleCheck } from "react-icons/fa6";


const Form = () => {
    const navigate = useNavigate();
    const { addEmployee } = useEmployeeContext();
    const [data,setData]=useState([]);
    const[visible,setVisible]=useState(false);
    const[alert,setAlert]=useState('Added successfully');
    const[bg,setBg]=useState('green');
    const [formData, setFormData] = useState({
        employeeName: '',
        employeeId: '',
        jobTitle: 'Frontend Developer',
        department: '',
        baseSalary: '',
        overtimePay: '',
        deductions: '',
        otherAllowances: '',
        upiId:'',
      });
    //   useEffect(() => {
        
    //   }, [formData.employeeName, formData.employeeId, formData.jobTitle, formData.overtimePay, formData.department, formData.baseSalary, formData.deductions, formData.otherAllowances, formData.upiId]);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (
          formData.employeeName === '' ||
          formData.employeeId === '' ||
          formData.jobTitle === '' ||
          formData.overtimePay === '' ||
          formData.department === '' ||
          formData.baseSalary === '' ||
          formData.deductions === '' ||
          formData.otherAllowances === '' ||
          formData.upiId === ''
        ) {
          setBg('red');
          setAlert('Please enter valid input!!');
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 3000);
        } else {
          setBg('green');
          setAlert('Data added successfully');
          addEmployee(formData);
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
            navigate('/employee-list');
          }, 3000);
        }
      };
      

      
  return (
    <div className='form'>
      <div className="form-container">
        <form>
            <h2 className="title">Add Employee Data</h2>
            <div className="viewl-all">
              <button className="view-all-btn"onClick={()=>navigate('/employee-list')}>View all</button>
            </div>
            <div className="input-container">
                <div>
                <label htmlFor="name">Name</label>
                <input type="text" className="input-field name-field"placeholder='eg. RONAK SAINI' name="employeeName" value={formData.employeeName} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="employee-id">Employee ID</label>
                <input type="text" className="input-field id-field" placeholder='eg. 112232' name='employeeId' value={formData.employeeId} onChange={handleChange}/>
                </div>
            </div>
            <div className="input-container">
                <div>
                    <label htmlFor="job-title">Job Title</label>
                    <select id="job-title"name='jobTitle' value={formData.jobTitle} onChange={handleChange}>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Software Developer">Software Developer</option>
                </select>
                </div>
                <div>
                <label htmlFor="department">Department</label>
                    <select name="department" id="department" value={formData.department} onChange={handleChange}>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                </select>
                </div>
            </div>
            <div className="input-container input-container-salary">
                <div>
                    <label htmlFor="base-salary">Base Salary(IN INR)</label>
                    <input type="number"className='input-field' placeholder='eg. 40000'name='baseSalary' value={formData.baseSalary} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="overtime-salary">Overtime Pay(IN INR)</label>
                    <input type="number"className='input-field' placeholder='eg. 40000'name='overtimePay' value={formData.overtimePay} onChange={handleChange}/>
                </div>
            </div>
            <div className="input-container input-container-salary">
                <div>
                    <label htmlFor="deductions">Deductions(IN INR)</label>
                    <input type="number"className='input-field' placeholder='eg. 40000'name='deductions' value={formData.deductions} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="other-allowance">Other allowance(IN INR)</label>
                    <input type="number"className='input-field' placeholder='eg. 40000'name='otherAllowances' value={formData.otherAllowances} onChange={handleChange}/>
                </div>
            </div>
            <div className="input-container">
                <div>
                    <label htmlFor="upi">UPI Id</label>
                    <input type="text" className='input-field upi-id' placeholder='eg. ronaksaini@paytm'name='upiId' value={formData.upiId} onChange={handleChange}/>
                </div>
            </div>
            <button className='submit' onClick={handleSubmit}>Add</button>
        </form>
      </div>
      {visible&&
      <div className="notification">
      <div className="notification-container"style={{backgroundColor:bg}}>
      {bg==='red'?<RxCrossCircled />:<FaCircleCheck />}


        <h2 className="alert">{alert}</h2>
      </div>
    </div>}
    </div>
  )
}

export default Form
