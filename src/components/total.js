import React from 'react';


const Totaldiv = (props) => {


    return (
        <div className='total_display__container'>
            <h6>{props.heading}</h6>
            <h3>{props.total}</h3>
            <div className='total_display_delta'>
                <span className={props.heading === 'Recovered cases' ? 'badge badge-success' : 'badge badge-danger'}>{props.delta ? `+${props.delta}` : null}</span>
            </div>
        </div>

    )
}

export default Totaldiv