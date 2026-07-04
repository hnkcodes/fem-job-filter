import { fetchData } from "../store/job-post-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { JobItem } from "./JobItem";

export default function JobBoard() {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobPost.jobs);
  const filterArr = useSelector((state) => state.jobPost.filterArr);

  let filteredJobs = jobs;

  if (filterArr.length > 0) {
    filterArr.forEach((filterItem) => {
      if (filterItem.type === "role") {
        filteredJobs = filteredJobs.filter(
          (job) => job.role === filterItem.item,
        );
      }
      if (filterItem.type === "tools") {
        filteredJobs = filteredJobs.filter((job) =>
          job.tools.includes(filterItem.item),
        );
      }
      if (filterItem.type === "languages") {
        filteredJobs = filteredJobs.filter((job) =>
          job.languages.includes(filterItem.item),
        );
      }
    });
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <section className="job-board">
      {filteredJobs.map((job) => (
        <JobItem job={job} key={job.id} />
      ))}
    </section>
  );
}
