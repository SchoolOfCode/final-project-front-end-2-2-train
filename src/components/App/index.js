import style from "./App.module.css";
import Title from "./Title";
import SidebarBtn from "./SidebarBtn";
import PhotoGrid from "./PhotoGrid";

//! title and sidebar commented out for styling purposes

function App() {
  return (
    <div className={style.app}>
      <div className={style.navbar}>
        <Title />
        <SidebarBtn />
      </div>
      <PhotoGrid />
    </div>
  );
}

export default App;
