import React, { useEffect, useRef } from 'react'

const RefsDemo = () => {
    const inputRef = useRef(null);
    const ageRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputRef.current.value, ageRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <input type="number" ref={ageRef} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default RefsDemo