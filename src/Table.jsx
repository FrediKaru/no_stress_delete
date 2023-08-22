import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./App.css";

const peopleArray2 = [
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
];

const Table = () => {
  const [peopleArray, setPeopleArray] = useState(peopleArray2);
  const navigate = useNavigate();

  const updateWorkerData = (updatedWorker) => {
    const updatedArray = peopleArray.map((worker) =>
      worker.id === updatedWorker.id ? updatedWorker : worker
    );
    setPeopleArray(updatedArray); // Assuming you have a state for peopleArray
  };

  function themeColor(team) {
    switch (team) {
      case "Product":
      case "Design":
        return "dark:bg-yellow-300 dark:text-yellow-700";
      case "Sales":
      case "Finance":
        return "dark:bg-green-300 dark:text-green-700";
      case "Marketing":
        return "dark:bg-orange-300 dark:text-orange-700";
      case "Data Science":
        return "dark:bg-violet-300 dark:text-violet-700";
      case "Human Resources":
        return "dark:bg-indigo-300 dark:text-indigo-700";

      default:
        return "dark:bg-purple-300 dark:text-purple-700";
    }
  }

  const Workers = (props) => {
    const [workers, setWorkers] = useState(props.employees);

    function deleteBtn(workerId) {
      const updatedList = workers.filter((worker) => worker.id !== workerId);
      setWorkers(updatedList);
    }

    const workerRow = workers.map((worker) => (
      <tr className="hover:bg-gray-50" key={worker.id}>
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700">{worker.name}</div>
            <div className="text-gray-400">{worker.email}</div>
          </div>
        </th>
        <td className="px-6 py-4">{worker.id}</td>
        <td className="px-6 py-4">{worker.role}</td>
        <td className="px-6 py-4">
          <div
            className={` text-center bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${themeColor(
              worker.team
            )} w-50`}
          >
            {worker.team}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-2">{worker.salary}</div>
        </td>
        <td>
          <div className="flex justify-end gap-4 mx-5">
            <a href="#" onClick={() => deleteBtn(worker.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </a>
            <button
              onClick={() =>
                setWorkerData({
                  ...workerData,
                  name: "event.target.value333",
                })
              }
            >
              Here
            </button>
            <Link
              to="/item"
              state={
                { data: worker }
                // updateFunction: updateWorkerData,
              }
              key={worker.id}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </Link>
          </div>
        </td>
      </tr>
    ));
    return workerRow;
  };

  return (
    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead className="bg-gray-50">
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
          Name
        </th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
          ID
        </th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
          Role
        </th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
          Team
        </th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
          Salary (Annually €)
        </th>

        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
      </thead>
      <tbody className="divide-y divide-gray-100 border-t border-gray-100">
        <Workers employees={peopleArray} />
      </tbody>
    </table>
  );
};

export default Table;
