import type { User } from "../types"

//=====================================================
//Props for the display idol
interface DisplayIdol {
  user: User
}
//=====================================================
//Return data as a component idol
export default function DisplayIdol({user}: DisplayIdol) {
  return (
    <div key={user.id} className="bg-gray-100 p-3 m-2 rounded shadow">
      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.address.city}</p>
      <p className="text-gray-600">{user.address.zipcode}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="text-gray-600">{user.website}</p>
    </div>
  )
}