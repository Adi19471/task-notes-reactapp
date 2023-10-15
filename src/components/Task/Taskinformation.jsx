import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



import "./TaskInformation.css"

const TaskInformation = () => {
  const { id } = useParams(); 

  const [data, setData] = useState(null); 

  useEffect(() => {
  
    axios
      .get(`http://localhost:3001/task/${id}`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error(err); 
      });
  }, [id]); 

  return (
    <div className="container">
      <Link to="/" className="btn btn-info" style={{ marginLeft: "50px", marginTop: "50px" }}>
        Back
      </Link>
      <div className="row mt-2 py-5 mx-5">
        <div className="card shadow">
          <div className="card-body">
            {data ? (
              <>
                <h4 className="card-title">{data.title}</h4>
                <p className="card-text">{data.description}</p>
                <p className="card-text">{data.date}</p>
                <div className="video-image"  >
                  <audio src={data.video} controls className="w-100"></audio>
                  <img src={data.image} alt="" className="w-100 img-fluid shadow mt-2 rounded" />
                </div>
                <p className="card-text mt-5">{data.description}</p> 
               <small className="">Start Typing...</small>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInformation;
