import { useEffect, useState } from "react";
import NavBar from "./components/NavBar"
import {type User} from "./types"
import DisplayIdol from "./components/DisplayNiIdol";

//=====================================================
//Constant for the api used
const API = "https://jsonplaceholder.typicode.com/users";

//=====================================================
//Exportable function or something I dunnaur
export default function App() {
  const [data, setData] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showFiltered, setShowFiltered] = useState(false);

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
    if (!searchContent) {
      setShowFiltered(false);
      return;
    }
    if (data) {
      const filtered = data.filter(user => 
        user.name.toLowerCase().includes(searchContent.toLowerCase()) ||
        user.username.toLowerCase().includes(searchContent.toLowerCase()) ||
        user.email.toLowerCase().includes(searchContent.toLowerCase())
      );
      setFilteredUsers(filtered);
      setShowFiltered(searchContent.length > 0);
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
{/* Area of website to display the navbar */}
      <div>
        <NavBar searchInput={displayUser} />
      </div>

{/*=====================================================*/}
{/* Conditional rendering based on search state */}
      <div className="mt-4">
        {(() => {
          if (showFiltered) {
            if (filteredUsers.length > 0) {
              return (
                <div>
                  <h2 className="text-xl font-bold px-2 mb-2">
                    Filtered Young Stunnas:
                  </h2>
                  {filteredUsers.map((user) => (
                    <DisplayIdol key={user.id} user={user} />
                  ))}
                </div>
              );
            } else {
              return (
                <div>
                  <h2 className="text-xl font-bold px-2 mb-2">
                    No matching Young Stunnas found!
                  </h2>
                </div>
              );
            }
          } else {
            return (
              <div>
                <h2 className="text-xl font-bold px-2 mb-2">
                  All Potential "Young Stunnas":
                </h2>
                {data?.map((user) => (
                  <DisplayIdol key={user.id} user={user} />
                ))}
              </div>
            );
          }
        })()}
      </div>
{/*=====================================================*/}
    </div>
  )
}