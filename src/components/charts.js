import React, { useContext } from 'react';
import Jsoncontext from '../context/context';

const Chart = () => {
    let total = useContext(Jsoncontext)
    console.log(total)

    return (
        <div>
        </div>
    )
}


export default Chart