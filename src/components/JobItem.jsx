import { useDispatch } from "react-redux";
import { jobPostActions } from "../store/job-post-slice";

export const JobItem = function ({ job }) {
  const dispatch = useDispatch();

  const handleJobFilter = function (obj) {
    dispatch(jobPostActions.setFilter(obj));
  };
  return (
    <article
      className={`job-item-card white-card ${job.featured ? "featured-tag" : ""}`}
    >
      <img src={job.logo} alt={job.company + "logo"} className="job-logo" />
      <div className="card-grid">
        <div className="first-row">
          <p className="company-name">{job.company}</p>
          {job.new && <p className="new-tip">new!</p>}
          {job.featured && <p className="featured-tip">featured</p>}
        </div>
        <div className="sec-row">
          <p>{job.position}</p>
        </div>
        <div className="third-row">
          <p>{job.postedAt} ・</p>
          <p>{job.contract} ・</p>
          <p>{job.location}</p>
        </div>

        <div className="button-container">
          {job.languages.map((lang) => (
            <button
              onClick={() => handleJobFilter({ item: lang, type: "languages" })}
              key={lang}
              className="job-post-button light-green-card"
            >
              {lang}
            </button>
          ))}
          {job.tools.map((tool) => (
            <button
              key={tool}
              onClick={() => handleJobFilter({ item: tool, type: "tools" })}
              className="job-post-button light-green-card"
            >
              {tool}
            </button>
          ))}
          <button
            onClick={() => handleJobFilter({ item: job.role, type: "role" })}
            className="job-post-button light-green-card"
          >
            {job.role}
          </button>
        </div>
      </div>
    </article>
  );
};
