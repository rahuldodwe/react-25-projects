import "./pagination.css";

export default function Pagination({ currentPage, totalPages = 10, onChange }) {
  function generateNoOfPages() {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  return (
    <div className="pagination">
      <button className="pagination-btn">Prev</button>
      {generateNoOfPages().map((pageNo) => (
        <button
          className="pagination-btn"
          key={pageNo}
          onClick={() => onChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button className="pagination-btn">Next</button>
    </div>
  );
}
