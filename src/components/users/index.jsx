import { useEffect, useState } from "react";

const UserFetching = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const results = await apiResponse.json();
      console.log(results.users);
      if (results?.users) {
        setLoading(false);
        setUserData(results.users);
      } else {
        setUserData([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleFetchUsers = () => {
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Fetching data... Please wait!</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold underline mb-2">
        Fetching Users from an API
      </h2>
      <div className="flex items-center justify-between">
        <h3 className="hover:bg-red-100 text-2xl font-bold underline mb-2 text-center">
          User List
        </h3>
        <button
          onClick={handleFetchUsers}
          className="p-2 rounded-xl bg-blue-200 font-medium m-2"
        >
          Refresh List...
        </button>
      </div>
      <div>
        <ul>
          {userData && userData.length > 0 ? (
            userData.map((user) => (
              <li key={user.id} className="list-disc">
                {user.firstName}
              </li>
            ))
          ) : (
            <p>No users found!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserFetching;
