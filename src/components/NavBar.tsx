import { useState } from "react";

//=====================================================
//Props for the nav bar idol
type NavBarProps = {
  searchInput: (searchContent: string) => void;
}
//=====================================================
//Exportable function or something I dunnaur
export default function NavBar({searchInput}: NavBarProps) {
  const [searchContent, setSearchContent] = useState("");

//=====================================================
//Function to restrict the searching of young stunnas if empty textarea
  function AddUserArray(searchContent: string){
      searchInput(searchContent);
  }

//=====================================================
//Return data of the exportable function display idol
  return (
    <div className="bg-stone-950 w-full h-20 text-white flex justify-around items-center">

{/*=====================================================*/}
{/* Area of navbar to hold the button */}
      <div>
        <button className="bg-stone-600 px-6 py-2 rounded-lg hover:scale-200 hover:animate-[pulse_0.1s_ease-in-out_infinite] hover:bg-stone-950 transition"
        onClick={() => AddUserArray(searchContent)}
        >
          Filter Natin Mga Young Stunnas
        </button>
      </div>

{/*=====================================================*/}
{/* Area of navbar to hold the text area */}
      <div>
        <textarea className="bg-stone-600 rounded-md w-200 h-11 resize-none text-left flex items-center py-2 px-3" placeholder="Search"
        value={searchContent}
        onChange={(e) => setSearchContent(e.target.value)}
        />
      </div>
{/*=====================================================*/}
    </div>
  );
}