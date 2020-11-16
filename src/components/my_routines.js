import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import "../bootstrap.min.css";
const MyRoutines = (props) => {
  const { token, user } = props;
  const [routines, setRoutines] = useState([]);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [editing, setEditing] = useState(false);
  const [test, setTest] = useState("");
  const getRoutines = async () => {
    try {
      const routinesArr = await callApi({
        url: `/users/${user.username}/routines`,
      });
      setRoutines(routinesArr);
      console.log("routines: ", routinesArr);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRoutines();
  }, [test]);

  const addRoutine = async (event) => {
    try {
      event.preventDefault();
      const response = await callApi({
        url: "/routines",
        token: token,
        method: "post",
        body: { name: name, goal: goal, isPublic: true },
      });
      setTest(response);
      console.log("response: ", response);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteRoutine = async (id) => {
    try {
      const response = await callApi({
        url: `/routines/${id}`,
        token: token,
        method: "delete",
      });
      setTest(response);
      console.log("response: ", response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {token ? (
        <>
          <h1 style={{ margin: "auto", width: "50%", padding: "10px" }}>
            Add New Routine
          </h1>
          <form
            style={{ margin: "auto", width: "50%", padding: "10px" }}
            onSubmit={addRoutine}
          >
            <div className="form-group ">
              <label className="font-weight-bold" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label className="font-weight-bold" htmlFor="description">
                Goal
              </label>
              <input
                type="text"
                className="form-control"
                id="goal"
                value={goal}
                onChange={(e) => {
                  setGoal(e.target.value);
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>{" "}
        </>
      ) : (
        ""
      )}
      <h3>Routines</h3>
      {routines.map((routine) => (
        <div className="card" key={routine.id}>
          <div className="card-body">
            <h3 className="card-title">{routine.name}</h3>
            <h6 className="card-subtitle mb-2 text-muted">{routine.goal}</h6>
            <h6 className="card-subtitle mb-2 text">
              Creator: {routine.creatorName}
            </h6>
            <br></br>
            {routine.activities[0] ? <h5>Activities: </h5> : ""}
            {routine.activities.map((activity) => (
              <div className="card-body" key={activity.id}>
                <h5 className="card-title">{activity.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {activity.description}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Duration: {activity.duration}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted">
                  Count: {activity.count}
                </h6>
              </div>
            ))}

            {user.username === routine.creatorName ? (
              <button
                className="btn btn-primary"
                onClick={() => setEditing(!editing)}
              >
                Edit
              </button>
            ) : (
              ""
            )}

            {user.username === routine.creatorName ? (
              <button
                className="btn btn-danger"
                onClick={() => deleteRoutine(routine.id)}
              >
                Delete
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MyRoutines;
