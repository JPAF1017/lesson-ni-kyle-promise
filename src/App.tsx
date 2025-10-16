import { useEffect, useState } from "react";
import NavBar from "./components/NavBar"
import {type User} from "./types"
//=====================================================
//Constant for the api used
const API = "https://jsonplaceholder.typicode.com/users";
//=====================================================
//Exportable function or something I dunnaur
export default function App() {
  const [data, setData] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//=====================================================
//Promise for fetching data from the website
  function fetchData() {
    fetch(API)
    .then(response => response.json())
    .then((data) => setData(data))
    .catch((error) => setError(error))
    .finally(() => setIsLoading(false))
  }
//=====================================================
//Function for searching similar words, checks similar string in the name, username, or email
  function displayUser(searchContent: string) {
    if (data) {
      const filtered = data.filter(user => 
        user.name.toLowerCase().includes(searchContent.toLowerCase()) ||
        user.username.toLowerCase().includes(searchContent.toLowerCase()) ||
        user.email.toLowerCase().includes(searchContent.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }
//=====================================================
// User effect for something I dunno bruh
  useEffect(fetchData, [])
//=====================================================
// Display the website
  return (
    <div>
{/*=====================================================*/}
{/* Area of website to display the filtered users on the text result */}
      <div>
        <NavBar searchInput={displayUser} />
        <div className="mt-4">
          {filteredUsers.length > 0 && (
            <div>
              <h2 className="text-xl font-bold px-2 mb-2">Filtered Young Stunnas:</h2>
              {filteredUsers.map((user) => (
                <div key={user.id} className="bg-blue-100 p-3 m-2 rounded shadow">
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-gray-600">@{user.username}</p>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
{/*=====================================================*/}
{/* Area of website to display all the users */}
      <div>
        <h2 className="text-xl font-bold px-2 mb-2 mt-6">All Potential "Young Stunnas":</h2>
        {data?.map((user) => {
          return (
            <div key={user.id} className="bg-gray-100 p-3 m-2 rounded shadow">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-gray-600">@{user.username}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          );
        })}
      </div>
{/*=====================================================*/}
    </div>
  )
}