import { useEffect } from "react";
import { useState } from "react";
import User from "./user";
import "./styles.css";

export default function GithubProfileFinder() {
  const [username, setUserName] = useState("rahuldodwe");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }

    // console.log(data);
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading Data, Please Wait !</h1>
      </div>
    );
  }

  return (
    <>
    <h1 className="m-t">12. Github Profile Finder</h1>
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
    </>
  );
}


