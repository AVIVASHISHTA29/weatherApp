import { Component, useState } from "react";
import "./App.css";

// class App extends Component {
//   state = { lat: "" };

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position.coords);
//       this.setState({ lat: position.coords.latitude });
//     });
//   }

//   render() {
//     return <div className="App">Latitude : {this.state.lat}</div>;
//   }
// }
// export default App;

function App() {
  const [lat, setLat] = useState();
  const month = new Date().getMonth() + 1;

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords);
    setLat(position.coords.latitude);
  });

  let message = "";

  if (lat > 0 && (month >= 10 || month <= 3)) {
    message = "Its Chilly In North Hemisphere";
  } else if (lat <= 0 && month >= 3 && month <= 10) {
    message = "Its Chilly In South Hemisphere";
  } else if (lat > 0 && month >= 3 && month <= 10) {
    message = "It is sunny in North Hemisphere";
  } else if (lat <= 0 && (month >= 10 || month <= 3)) {
    message = "It is Hot in south hemisphere";
  } else {
    message = "God is calculating...";
  }

  return (
    <div className="App">
      <h1>Latitude : {lat}</h1>
      <p>{message}</p>
    </div>
  );

  // if (lat > 0 && (month >= 10 || month <= 3)) {
  //   return <p>Its Chilly In North Hemisphere</p>;
  // } else if (lat <= 0 && month >= 3 && month <= 10) {
  //   return <p>Its Chilly In South Hemisphere</p>;
  // } else if (lat > 0 && month >= 3 && month <= 10) {
  //   return <p>It is sunny in North Hemisphere</p>;
  // } else if (lat <= 0 && (month >= 10 || month <= 3)) {
  //   return <p>It is Hot in south hemisphere</p>;
  // } else {
  //   return <p>God knows</p>;
  // }

  // return (
  //   <div className="App">
  //     <h1>Latitude : {lat}</h1>
  //     {lat > 0 && (month >= 10 || month <= 3) ? (
  //       <p>Its Chilly In North Hemisphere</p>
  //     ) : lat <= 0 && month >= 3 && month <= 10 ? (
  //       <p>Its Chilly In South Hemisphere</p>
  //     ) : lat > 0 && month >= 3 && month <= 10 ? (
  //       <p>It is sunny in North Hemisphere</p>
  //     ) : lat <= 0 && (month >= 10 || month <= 3) ? (
  //       <p>It is Hot in south hemisphere</p>
  //     ) : (
  //       <></>
  //     )}
  //   </div>
  // );
}

export default App;
