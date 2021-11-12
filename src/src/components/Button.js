import { render } from "@testing-library/react"
import react from "react";
import {useState} from 'react'
import Counter from './counter';
function Button(props){
    render()
    const [state,setState]=useState(false)
    return(
        <div className="button">
        <br></br>
        <button onClick={()=>setState(!state)}>{props.value}</button>
        {state ? <Counter/> : null}
        </div>
    );
}
export default Button