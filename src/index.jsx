import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App-Profile";

ReactDOM.render(<App />, document.querySelector("#root"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const painting = (
//     <div className="profile">
//         <div className="description">
//             <img
//                 src={user.avatar}
//                 alt="Аватар пользователя"
//                 className="avatar"
//             />
//             <p className="name"> {user.name}</p>
//             <p className="tag"> {user.tag}</p>
//             <p className="location"> {user.location}</p>
//         </div>

//         <ul className="stats">
//             <li>
//                 <span className="label">Followers</span>
//                 <span className="quantity"> {user.stats.followers}</span>
//             </li>
//             <li>
//                 <span className="label">Views</span>
//                 <span className="quantity"> {user.stats.views}</span>
//             </li>
//             <li>
//                 <span className="label">Likes</span>
//                 <span className="quantity"> {user.stats.likes}</span>
//             </li>
//         </ul>
//     </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));

// const statisticalDates = statisticalData[0]

// ReactDOM.render(
//     <Component
//     />,
//     document.querySelector('#stat'));

//   <Statistic
//     more={statisticalDates.label}
//     value={statisticalDates.percentage}
// />,
//===============================================================================

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
