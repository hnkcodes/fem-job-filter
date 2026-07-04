import { useDispatch } from "react-redux";
import { jobPostActions } from "../store/job-post-slice";

export default function Filter({ filter }) {
  const dispatch = useDispatch();
  const handleDeleteItem = function (item) {
    dispatch(jobPostActions.deleteFilterItem(item));
  };
  const handleClearArr = function () {
    dispatch(jobPostActions.clearFilter());
  };

  return (
    <div className="filter-container white-card">
      <ul className="filter-list">
        {filter.map((filterItem) => (
          <li
            key={filterItem.item}
            className="light-green-card filter-list-item"
          >
            <p className="filter-list-text">{filterItem.item}</p>

            <button
              onClick={() => handleDeleteItem(filterItem)}
              className="clear-item-button"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearArr} className="clear-button">
        Clear
      </button>
    </div>
  );
}
