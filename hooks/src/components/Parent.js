import React, { useContext } from 'react'
import Child from './Child'
import { UserContext } from '../App'

const Parent = () => {
    const user = useContext(UserContext)

    return (
        <>
            <h1>useContext - {user}</h1>
            <Child />
        </>
    )
}

export default Parent