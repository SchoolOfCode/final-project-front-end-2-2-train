import style from "./App.module.css";
import Title from "./Title";
import SidebarBtn from "./SidebarBtn";
import PhotoGrid from "./PhotoGrid";

function App() {
  return (
    <div className={style.app}>
      <h1>Memo
      <br/>Map </h1>
      {/* <Title />
      <SidebarBtn /> */}
      <PhotoGrid />
    </div>
  );
}

export default App;
