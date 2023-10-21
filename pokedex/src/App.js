import "./App.css";
import logo from "./img/logo.png";
import React, { useEffect, useState } from "react";

//Display Prop
function Display(props) {
  //props.info is your entry point
  let name = props.info.name.toUpperCase();
  return (
    <div class="info-display">
      <div class="card card-styling">
        <div class="card-body">
          <h5 class="card-title title-text">{name}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">
            #{props.info.id}
          </h6>
          <p class="card-text disp-text">
            <b>Height: </b>
            {props.info.height}
          </p>
          <p class="card-text disp-text">
            <b>Weight: </b>
            {props.info.weight}
          </p>
          <p class="card-text disp-text">
            <b>Base Experience: </b>
            {props.info.base_experience}
          </p>
        </div>
      </div>
    </div>
  );
}

//Main App
function App() {
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);

  //API connection and call
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const handleClick = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(url + message, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  let pokeData = JSON.stringify(data);
  pokeData = JSON.parse(pokeData);

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  return (
    <div className="pokemon">
      <img src={logo} alt="logo"></img>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a Pokemon!"
            onChange={handleChange}
            value={message}
          ></input>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleClick}
          >
            GO!
          </button>
        </div>
      </form>
      {pokeData ? <Display info={pokeData} /> : null}
    </div>
  );
}

export default App;
