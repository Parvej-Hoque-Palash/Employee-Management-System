import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedPosition, setSelectedPosition] = useState('All Positions');
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6; // Number of users to display per page


  useEffect(() => {
    // Fetch all employees initially
    axios.get('http://localhost:5000/api/employee/').then((res) => setUsers(res.data));
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Good job!",
      text: "Successfully deleted!",
      icon: "success",
    });
   axios.delete(`http://localhost:5000/api/employee/${id}`)
   .then(res=>console.log(res.data));
   window.location.reload();
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };
  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };
  const handleSort = (column) => {
    if (column === sortedColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortDirection('asc');
    }
  };
  // Filter users based on the search query
  const filteredAndSortedUsers = users
  .filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .filter((user) =>
    selectedDepartment === 'All Departments' || user.department === selectedDepartment
  )
  .filter((user) =>
    selectedPosition === 'All Positions' || user.position === selectedPosition
  )
  .sort((a, b) => {
    const sortOrder = sortDirection === 'asc' ? 1 : -1;
    if (sortedColumn) {
      if (typeof a[sortedColumn] === 'string' && typeof b[sortedColumn] === 'string') {
        return a[sortedColumn].localeCompare(b[sortedColumn]) * sortOrder;
      } else {
        return a[sortedColumn] > b[sortedColumn] ? sortOrder : -sortOrder;
      }
    }
    return 0;
  });


  const pageCount = Math.ceil(filteredAndSortedUsers.length / usersPerPage);
  const offset = pageNumber * usersPerPage;
  const usersToDisplay = filteredAndSortedUsers.slice(offset, offset + usersPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };
  const departments = [...new Set(users.map((user) => user.department))];
  const positions = [...new Set(users.map((user) => user.position))];

  return (
    <div className="relative overflow-x-auto shadow-md sm:lg bg-gray-700 pb-24">
      <div className="w-full p-5 flex justify-around text-lg text-left text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <div>
      <input
        type="text"
        placeholder=" Filter by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      <div>
      <select value={selectedDepartment} onChange={handleDepartmentChange}>
        <option value="All Departments">All Departments</option>
        {departments.map((department) => (
          <option key={department} value={department}>
            {department}
          </option>
        ))}
      </select>
      </div>
      <div>
      <select value={selectedPosition} onChange={handlePositionChange}>
      <option value="All Positions">All Positions</option>
        {positions.map((position) => (
          <option key={position} value={position}>
            {position}
          </option>
        ))}
      </select>
      </div>
      </div>
      <table className="w-full text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-4" onClick={() => handleSort('id')}>ID
          <a  href="#"><svg className="w-3 h-3 ml-auto mr-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
          </th>
            <th scope="col" className="px-6 py-4" onClick={() => handleSort('firstName')}>First Name
            <a href="#"><svg className="w-3 h-3 ml-auto mr-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
            </th>
            <th scope="col" className="px-6 py-4" onClick={() => handleSort('lastName')}>Last Name
            <a href="#"><svg className="w-3 h-3 ml-auto mr-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
            </th>
            <th scope="col" className="px-6 py-4" onClick={() => handleSort('age')}>Age
            <a href="#"><svg className="w-3 h-3 ml-auto mr-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
            </th>
            <th scope="col" className="px-6 py-4" onClick={() => handleSort('position')}>Position
            <a href="#"><svg className="w-3 h-3 ml-auto mr-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg></a>
            </th>
            <th scope="col" className="px-6 py-4"><span className="sr-only">Details..</span></th>
            <th scope="col" className="px-6 py-4"><span className="sr-only">Edit</span></th>
            <th scope="col" className="px-6 py-4"><span className="sr-only">Delete</span></th>
          </tr>
        </thead>
        <tbody>
          {usersToDisplay.map((row) => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={row._id}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.id}</th>
              <td className="px-6 py-4">{row.firstName}</td>
              <td className="px-6 py-4">{row.lastName}</td>
              <td className="px-6 py-4">{row.age}</td>
              <td className="px-6 py-4">{row.position}</td>
              <td>
                <Link to={`/user/${row.id}`} className="font-medium text-green-600 dark:text-green-500 hover:underline">Details..</Link>
              </td>
              <td>
                <Link to={`/update/${row.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
              </td>
              <td>
                <button onClick={() => handleDelete(row.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
      className="flex text-lg justify-between pr-4 py-4 pl-4 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Home;
