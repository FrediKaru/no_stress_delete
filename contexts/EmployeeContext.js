import { createContext, useState } from "react";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([
    {
      name: "John Doe",
      role: "Software Engineer",
      id: 5462,
      salary: 80000,
      workStartYear: 2015,
      email: "john.doe@gmail.com",
      team: "Engineering",
      isEditing: false,
      info: "Also completes bonus tasks from marketing team.",
    },
    {
      name: "Jane Smith",
      role: "Product Manager",
      id: 2119,
      salary: 90000,
      workStartYear: 2012,
      email: "jane.smith@hotmail.com",
      team: "Product",
      isEditing: false,
      info: "Anim deserunt officia ea commodo sit culpa.",
    },
    {
      name: "Michael Johnson",
      role: "Data Scientist",
      id: 7589,
      salary: 95000,
      workStartYear: 2018,
      email: "michael.johnson@gmail.com",
      team: "Data Science",
      isEditing: false,
      info: "Sit fugiat pariatur enim anim enim cillum aute mollit aliquip.",
    },
    {
      name: "Emily Williams",
      role: "UX Designer",
      id: 3091,
      salary: 75000,
      workStartYear: 2017,
      email: "emily.williams@icloud.com",
      team: "Design",
      isEditing: false,
      info: "Ea duis culpa sunt minim consectetur duis dolore sint nisi laborum officia mollit velit.",
    },
    {
      name: "David Lee",
      role: "Marketing Specialist",
      id: 6683,
      salary: 70000,
      workStartYear: 2019,
      email: "david.lee@hotmail.com",
      team: "Marketing",
      isEditing: false,
      info: "Dolor culpa consequat nulla quis ut aliquip ea occaecat labore nulla occaecat non enim nostrud.",
    },
    {
      name: "Sarah Adams",
      role: "HR Manager",
      id: 4357,
      salary: 85000,
      workStartYear: 2014,
      email: "sarah.adams@gmail.com",
      team: "Human Resources",
      isEditing: false,
      info: "Irure dolor nisi ea veniam nulla.",
    },
    {
      name: "Alex Turner",
      role: "Graphic Designer",
      id: 8024,
      salary: 72000,
      workStartYear: 2016,
      email: "alex.turner@hotmail.com",
      team: "Design",
      isEditing: false,
      info: "Ullamco excepteur laboris elit est incididunt excepteur deserunt ullamco elit deserunt reprehenderit voluptate.",
    },
    {
      name: "Jennifer Lopez",
      role: "Accountant",
      id: 1625,
      salary: 78000,
      workStartYear: 2013,
      email: "jennifer.lopez@gmail.com",
      team: "Finance",
      isEditing: false,
      info: "Exercitation elit cupidatat qui ipsum dolor nostrud culpa esse exercitation.",
    },
    {
      name: "Daniel Brown",
      role: "Sales Representative",
      id: 9368,
      salary: 68000,
      workStartYear: 2020,
      email: "daniel.brown@icloud.com",
      team: "Sales",
      isEditing: false,
      info: "Duis ex quis ut veniam officia ipsum quis.",
    },
    {
      name: "Sophia Clark",
      role: "Business Analyst",
      id: 4197,
      salary: 90000,
      workStartYear: 2011,
      email: "sophia.clark@gmail.com",
      team: "Business Analysis",
      isEditing: false,
      info: "Anim ipsum ea cillum sit fugiat duis deserunt ullamco mollit culpa mollit eiusmod aliquip et.",
    },
  ]);
  return (
    <EmployeeContext.Provider value={{ employees }}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
