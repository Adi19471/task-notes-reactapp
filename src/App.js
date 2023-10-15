import React from "react";
import Displaytask from "./components/Task/Displaytask";
import Createtask from "./components/Task/Createtask";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taskinformation from "./components/Task/Taskinformation";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
       <Route path="/"   element={<Displaytask />} ></Route>
       <Route path="/create"   element={<Createtask />} ></Route>
       <Route path="/view/:id"   element={<Taskinformation />} ></Route>

         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
