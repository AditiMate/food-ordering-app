import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);    //1st state variable
    const [count2] = useState(1);  //2nd state variable
    return(
        <div className="user-card">
            <h1>Count = {count} </h1>
            <h1>Count2 = {count2} </h1>
            <h2>Name: {name}</h2>
            <h3>Location: Nagpur</h3>
            <h4>Contact: aditimate0075@gmail.com</h4>
        </div>
    )
}

export default User;