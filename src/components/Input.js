import React, { useRef } from "react";

const Input = (props) => {
     const textRef = useRef();

    const info = ()=> {
        return (
            console.log("info ref", textRef.current.value)
        )
    }
    return (
        <>
            <input
                id="input"
                type="text"
                ref={textRef}
                placeholder="REFF"
                onClick={info}
            />
        </>
    )
}

export default Input;