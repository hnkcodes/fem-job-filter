import JobBoard from "./components/JobBoard";
import "./App.css";
import { useSelector } from "react-redux";
import Filter from "./components/Filter";
import coverImg from "./assets/bg-header-desktop.svg";

function App() {
  const filterArr = useSelector((state) => state.jobPost.filterArr);
  console.log(filterArr);
  return (
    <>
      <img src={coverImg} alt="cover image" className="cover-image" />
      <div className="filter-wrapper">
        {filterArr.length > 0 && <Filter filter={filterArr} />}
      </div>
      <JobBoard />
    </>
  );
}

export default App;
