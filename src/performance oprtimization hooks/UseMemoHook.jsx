import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UseMemoHook() {
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);

  async function getData() {
    const res = await axios.get(
      `http://localhost:8080/contacts?_page=${page}&_limit=10`
    );

    console.log("API response:", res.data);

    // If API returns an array directly
    if (Array.isArray(res.data)) {
      setUser(res.data);
    }
    // If API returns { contacts: [...] }
    else if (Array.isArray(res.data.contacts)) {
      setUser(res.data.contacts);
    }
    else {
      setUser([]);
    }
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <ul>
        {user.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button onClick={() => setPage((prev) => prev + 1)}>
        Next ({page})
      </button>
    </div>
  );
}

export default UseMemoHook;