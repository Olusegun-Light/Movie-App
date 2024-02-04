import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import "./index.css"
// import StartRating from "./StartRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StartRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating size={24} color="red" className="test" defaultRating={1} />
    <Test /> */}
  </React.StrictMode>
);
