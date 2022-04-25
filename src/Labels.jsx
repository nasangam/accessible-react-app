import React, {useRef, useEffect} from 'react';
import './skiplink.css';


function Labels() {
    const onClickHandler = ()=> console.log("Button clicked");
    const ref = useRef();
    useEffect(() => {
        ref.current.focus();
    }, [])
    return (
        <div>
            <a className="skip-link" href="#main">skip link</a>
            <ul>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>
                <li>  <a href="a.html">Home</a></li>

            </ul>
        <div id="main">
            <p id="terms1">terms1 & conditions1</p>
            <p id="terms2">By accepting terms, you are not allowed to change it again</p>
            <div><button onClick={onClickHandler} aria-label="terms & conditions">click me</button></div>
            <div><button onClick={onClickHandler} aria-labelledby="terms1 terms2">click me</button></div>
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" placeholder="enter name here" ref={ref}></input>
            <img src="../public/flower.jpeg" alt="flower"></img>
            
            <div role="button" tabindex="0" aria-label="terms" aria-pressed="false" onKeyUp={()=>console.log("keyup")} style={{ border:"1px solid black",background: "lightGray", width: "100px" }} onClick={onClickHandler}>Click here</div>
            </div>
        </div>
    )
}

export default Labels
