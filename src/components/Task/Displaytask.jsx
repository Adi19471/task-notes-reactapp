import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Displaytask.css"

const Displaytask = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/task")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid  dispalybackground"  >

    <Link to='/create' className="btn btn-info mt-5"   style={{ marginLeft: "1150px" }}> + &nbsp;New</Link>
      <div className="row  mt-2 py-5 mx-5">

      <h4 className="text-primary">Notes </h4>
        {data.map((item, index) => (
          <div key={index++} className=" mb-4">
            <div className="card shadow">
              <div className="card-body">


              <Link to={`view/${index}`} className="dispalyLink">
                <h4 className="card-text">{item.title}</h4>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.date}</p>
                </Link>

              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Displaytask;
