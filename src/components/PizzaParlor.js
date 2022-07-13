import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Footer } from './Footer';
import { NavBar } from './nav/NavBar';
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Authorized } from './views/Authorized';
import { ApplicationViews } from './views/ApplicationViews';
import './App.css';


export const PizzaParlor = () => {

  // const [toppings, setToppings] = useState([]); //what useState returns is an array of two elements: the current state and a function to update the state

  //When some state changes, we want to run this function
  // useEffect(() => {
  //   fetch("http://localhost:8088/toppings")
  //     .then(response => response.json())
  //     .then((toppings) => {
  //       setToppings(toppings);
  //     })

  // }, []); //the second argument is an array of values that determine whether or not the effect should run. If the array is empty, the effect will run every time the component renders. If the array contains a value, the effect will run only if that value changes.

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={
        <Authorized>
          <>
            <NavBar />
            {/* The rest of the app */}
            <ApplicationViews />
          </>
        </Authorized>
      }/>

    </Routes>
  );
}

{/* <h1>Welcome to Mama Leoni's Pizza!</h1>
{toppings.map(topping => (
    <p key={topping.id}>{topping.name}</p>
  )
)}
<Footer /> */}
