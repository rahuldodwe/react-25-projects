import { useEffect, useState } from "react";
import Suggesstions from "./suggesstions";
import './styles.css'

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilterUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilterUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      // console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  // console.log(users, filteredUsers);

  if (loading) {
    return <div>Data Loading, Please Wait !</div>;
  }

  return (
    <>
    <h1 className="h-t">13. Search Auto-Complete</h1>
    <div className="search-autocomplete-container">
      <input
        value={searchParam}
        type="text"
        name="search-users"
        id=""
        placeholder="Search Users here..."
        onChange={handleChange}
      />
      {showDropdown && (
        <Suggesstions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
    </>
  );
}
