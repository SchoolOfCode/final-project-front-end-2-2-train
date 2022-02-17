import style from "./App.module.css";
import Title from "./Title";
import Sidebar from "./Sidebar";
import PhotoGrid from "./PhotoGrid";

//! function to add styling to the sidebar that reveals content
// may have to pass styling down as props?

function App() {
  return (
    <div className={style.app}>
      <ul className={style.navbar}>
        <Sidebar />
        <li>
          <Title />
        </li>
        <li>
          <h1 className={style.menuIcon}>X</h1>
        </li>
      </ul>
      <PhotoGrid />
    </div>
  );
}

export default App;
