import React from "react";

const About = () => {

  // Variables
  let kiev ="https://images.unsplash.com/photo-1622994800979-3645d5ae5efb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  country = "Lorem",
  about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
      <div className="both">
         <h2>Información</h2><br/>
         <div>
            <img className="image" src={kiev} alt="img" />
         </div>
        <div className="data">
            <h3>Nombre: { country }</h3>
            <h3>{about}</h3>
        </div>
      </div>
  );
};
export default About;