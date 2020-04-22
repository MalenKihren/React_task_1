import React from "react";

import '../style/index.css';
function Joke(props) {
    return (
        <li className="li">
            <span >{props.question}</span>
            <br></br>
            <span className="punch">{props.punchLine}</span>
        </li>
    );
}

export default Joke