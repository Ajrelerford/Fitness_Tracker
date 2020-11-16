import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import "../bootstrap.min.css";
const Activities = (props) => {
  const { token } = props;
  const [activities, setActivities] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  
  const getActivities = async () => {
    try {
      const activitiesArr = await callApi({ url: "/activities" });
      setActivities(activitiesArr);
      console.log("activities: ", activitiesArr);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getActivities();
  }, [token]);
  const addActivity = async (event) => {
    try {
      event.preventDefault();
      const response = await callApi({
        url: "/activities",
        token:  token ,
        method: "post",
        body: { "name": name, "description":description },
      });
      console.log("response: ", response)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <> 
    {token ?<>
      <h1 style={{ margin: "auto", width: "50%", padding: "10px" }}>
        Add New Activity
      </h1>
      <form
        style={{ margin: "auto", width: "50%", padding: "10px" }}
        onSubmit={addActivity}
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
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> </>: '' }
      <h2>Activities</h2>
      {activities.map((activity) => (
        <div key={activity.id} className="card-body">
          <h4 className="card-title">{activity.name}</h4>
          <h5 className="card-subtitle mb-2 text-muted">
            {activity.description}
          </h5>
        </div>
      ))}
    </>
  );
};

export default Activities;
