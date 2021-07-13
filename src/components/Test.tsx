import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {doTest} from "../actions";

const Test = (props) => {
    const dispatch = useDispatch();
    
    const textSelector = state => state.texts;
    const texts = useSelector(textSelector);

    return (
        <React.Fragment>
            {/* <button onClick={() => doTest("hog1e")}>
                aa
            </button> */}
            <button onClick={() => dispatch(doTest("hog1e"))}>
                aa
            </button>
            <button onClick={() => console.log("onClick", texts)}>
                bvb
            </button>
            <ul>
                s
                {texts.map(text => {
                    return <li>{text}</li>
                })}
            </ul>
        </React.Fragment>
    )
}

export default Test;