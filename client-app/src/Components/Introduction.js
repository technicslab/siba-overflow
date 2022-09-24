import "./Introduction.css";
import { useHistory, usehistory } from "react-router-dom";
export default function Introduction() {
  const history = useHistory();
  function handleClick() {
    history.push("./Register");
  }
  return (
    <div className="container-fluid introPlot ">
      <div className="row mt-5">
        <div className="col col-md-5 offset-md-1">
          <p className="mainMessage">Be a part of TechFest today! </p>

          <p className="mainMessageDetail">
            Register yourself today and get full time support and career advice
            from our experts
          </p>
          <button
            className="d-inline btn loginBtn text-light rounded-pill px-4 mx-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="want to learn ?"
            onClick={handleClick}
          >
            Join as a Learner
          </button>
          <button
            className="d-inline btn  registerBtn rounded-pill px-4 mx-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="want to contribute ?"
            onClick={handleClick}
          >
            Become a contributor
          </button>
        </div>
        <div className="col col-md-5 offset-md-1"></div>
      </div>
    </div>
  );
}
