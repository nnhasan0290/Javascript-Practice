import { useContext, useState } from "react";
import {UserContext} from "./../App.js";
const Second = () => {
    const [age, setAge] = useState(22);
    const user = useContext(UserContext)
    console.log(user);
    console.log("second rendered");
    return(
        <h2 onClick={() => {setAge(age+1)}}>Here user is  . user's age {age}</h2>
    )
}
export default Second;