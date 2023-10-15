import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Createtask.css"

const Createtask = () => {

const navigation = useNavigate()

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    video: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTask);

    fetch("http://localhost:3001/task", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your data has been posted.");
       
      })
    
      .catch((error) => {
        console.log(error);
      });
      navigation('/')
  };

  return (
    <div className="container">
    <br />

      <Link to="/" className="text-dark mt-5">
      <i className="fas fa-arrow-left-long"></i>
      </Link>
      <div className="row mt-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
  {/*   <h4 className="card-title">Create Task</h4>  */}

              <form onSubmit={handleSubmit}>
                <button
                
        
                  type="submit"
                  className="btn btn-secondary mb-2   button "
                >
                  Save
                </button>

                <div className="form-group mb-1">
                  
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-1">
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Start Typing"
                    value={newTask.description}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-group mb-1">
                  
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    placeholder="Date"
                    value={newTask.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-1">
                  
                  <input
                    type="url"
                    className="form-control"
                    id="video"
                    name="video"
                    placeholder="Video URL"
                    value={newTask.video}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-1">
                 
                  <input
                    type="url"
                    className="form-control"
                    id="image"
                    name="image"
                    placeholder="Image URL"
                    value={newTask.image}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createtask;
