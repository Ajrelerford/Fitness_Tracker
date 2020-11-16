import React, { useEffect, useState } from "react";
import { callApi } from "../api";
import "../bootstrap.min.css";
const Routines = (props) => {
  const {token, user} = props
  const [routines, setRoutines] = useState([]);
  const [update, setUpdate] = useState('');
  const getRoutines = async () => {
    try {
      const routinesArr = await callApi({ url: "/routines" });
      setRoutines(routinesArr);
      
      console.log("routines: ", routinesArr);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRoutines();
  }, [update]);

  const deleteRoutine = async (id) => {
    try {
      
      const response = await callApi({
        url: `/routines/${id}`,
        token: token,
        method: "delete",
      });
      setUpdate(response);
      console.log("response: ", response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h3>Routines</h3>
      {routines.map((routine) => (
        <div className="card" key={routine.id} >
          <div className="card-body">
            <h3 className="card-title">{routine.name}</h3>
            <h6 className="card-subtitle mb-2 text-muted">
              {routine.goal}
            </h6>
            <h6 className="card-subtitle mb-2 text">
              Creator: {routine.creatorName}
            </h6>
            <br></br>
            {routine.activities[0] ? <h5>Activities: </h5>: ''}
            {routine.activities.map((activity)=> (
                
                <div className="card-body" key={activity.id}>
                  <h5 className="card-title">{activity.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{activity.description}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Duration: {activity.duration}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Count: {activity.count}</h6>
                  
                </div>
              
            ))}
            {user.username === routine.creatorName
              ? <button class="btn btn-primary" >Edit</button>
              : ""}
            
            {user.username === routine.creatorName
              ? <button class="btn btn-danger" onClick = {()=>deleteRoutine(routine.id)} >Delete</button>
              : ""}
          </div>
        </div>
      ))}
    </>
  );
};

export default Routines;
