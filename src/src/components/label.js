import { render } from "@testing-library/react"
function Label(props){
    render()
    return(
        <div className="label">
            <br></br>
            <label>Name: {props.name} </label>
            <br></br>
            <label>Age: {props.age}</label>
            <br></br>
            <label>Address: {props.address} </label>
            <br></br>
            <br></br>
        </div>

    );

}
export default Label
