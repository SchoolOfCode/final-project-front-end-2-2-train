import style from "./App.module.css";
import Sidebar from "./Sidebar";
import PhotoGrid from "./PhotoGrid";
import MenuIcon from "./Sidebar/MenuIcon";
import { React, useState } from "react";

//! function to add styling to the sidebar that reveals content
// may have to pass styling down as props?

function App() {
   // Sets the style of the sidebar to show it
   const [opened, setOpened] = useState(false);
   // The object that gets sent to the API using the users data
   const [obj, setObj] = useState({});
   console.log(obj);

   return (
      <div className={style.app}>
         <ul className={style.navbar}>
            <Sidebar opened={opened} setObj={setObj} />
            <li>
               <h1 className={style.title}>
                  Memo
                  <br />
                  Maps
               </h1>
            </li>
            <MenuIcon setOpened={setOpened} opened={opened} />
         </ul>
         <PhotoGrid />
      </div>
   );
}

export default App;
