import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props) {
        super(props);
        
        //console.log("Parent Constructor");
    }


    componentDidMount(){
        //console.log("Parent Component Did Mount");
      }

  render() {

    //console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          Logged in User <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Food Ordering App</h2>
        {/* <User name={"Aditi Mate (function)"} /> */}
        <UserClass name={"First"} location={"Nagpur (Class)"} />
      </div>
    );
  }
}

export default About;
