import { useState } from "react";
import Pagination from ".";
import './pagination.css';

export default function PaginationTest() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  // console.log(dummyData)

  const itemsPerPage = 10;
  const [currentPage, setcurrentPage] = useState(1);

  function handlePageChange(currentPage) {
    setcurrentPage(currentPage)
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  // console.log(currentListOfItems);

  return (
    <div className="test">
      <h1>17. Pagination</h1>
      <ul className="list-items">
        {currentListOfItems.map((listItem) => (
          <li key={listItem.id}>{listItem.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
