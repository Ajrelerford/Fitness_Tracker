import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import "../bootstrap.min.css";
const Activities = (props) => {
  const [activities, setActivities] = useState([]);
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
  }, []);

  return (
    <>
      <h2>Activities</h2>
      {activities.map((activity) => (
        <div className="card-body">
          <h4 className="card-title">{activity.name}</h4>
          <h5 className="card-subtitle mb-2 text-muted">{activity.description}</h5>
        </div>
      ))}
    </>
  );
};

export default Activities;
