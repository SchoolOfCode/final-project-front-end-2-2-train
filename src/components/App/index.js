import style from "./App.module.css";
import Sidebar from "./Sidebar";
import PhotoGrid from "./PhotoGrid";
import MenuIcon from "@mui/icons-material/Menu";

//! function to add styling to the sidebar that reveals content
// may have to pass styling down as props?

function App() {
   return (
      <div className={style.app}>
         <ul className={style.navbar}>
            <Sidebar />
            <li>
               <h1 className={style.title}>
                  Memo
                  <br />
                  Map
               </h1>
            </li>
            <MenuIcon className={style.menuIcon} />
         </ul>
         <PhotoGrid />
      </div>
   );
}

export default App;
